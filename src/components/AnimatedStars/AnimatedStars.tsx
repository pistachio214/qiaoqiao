// src/components/AnimatedStars.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './AnimatedStars.module.scss';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

interface StarProps {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

// 生成单颗星星（抽离函数，方便分批生成）
const generateSingleStar = (id: number): StarProps => ({
  id,
  size: id < 10 ? random(1, 1.2) : random(1.1, 1.3), // 初始星星更小
  top: random(0, 100),
  left: random(0, 100),
  delay: random(0, 2),
  duration: random(5, 6),
});

export default function AnimatedStars() {
  const [stars, setStars] = useState<StarProps[]>([]); // 初始为空，无兜底
  const starContainerRef = useRef<HTMLDivElement>(null);
  const batchTimer = useRef<NodeJS.Timeout | null>(null);

  // 分批生成星星（核心：避免一次性满屏）
  const generateStarsInBatches = () => {
    const totalStars = 200; // 总星星数（减少数量，避免满屏）
    const batchSize = 35; // 每批生成5颗
    let currentId = 0;

    // 清空之前的定时器
    if (batchTimer.current) clearInterval(batchTimer.current);

    // 分批添加星星
    batchTimer.current = setInterval(() => {
      if (currentId >= totalStars) {
        clearInterval(batchTimer.current!);
        return;
      }

      // 生成当前批次的星星（5颗）
      const newBatch = Array.from({ length: batchSize })
        .filter(() => currentId < totalStars)
        .map(() => generateSingleStar(currentId++));

      // 追加星星（而非覆盖），实现渐进式出现
      setStars(prev => [...prev, ...newBatch]);
    }, 200); // 每200ms生成一批，节奏更自然
  };

  useEffect(() => {
    // 监听页面可见性
    const handleVisibilityChange = () => {
      const container = starContainerRef.current;
      if (!container) return;

      if (document.hidden) {
        container.style.animationPlayState = 'paused';
        setStars([]); // 切后台清空
        if (batchTimer.current) clearInterval(batchTimer.current);
      } else {
        container.style.animationPlayState = 'running';
        generateStarsInBatches(); // 切回前台重新分批生成
      }
    };

    // 初始化：分批生成星星（无兜底，渐进出现）
    generateStarsInBatches();

    // 注册监听
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (batchTimer.current) clearInterval(batchTimer.current);
    };
  }, []);

  // 无兜底：直接渲染当前星星数组（初始为空，无任何占位）
  return (
    <div ref={starContainerRef} className={styles.starContainer}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.size < 6 ? 0.4 : 0.5, // 初始星星更暗
            background: '#fff',
            boxShadow: star.size < 6 
              ? '0 0 3px rgba(255, 255, 255, 0.6)' 
              : '0 0 5px rgba(255, 255, 255, 0.8)',
          }}
        />
      ))}
    </div>
  );
}