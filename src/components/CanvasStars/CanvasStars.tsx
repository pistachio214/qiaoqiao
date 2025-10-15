// components/CanvasStars.tsx
'use client';
import { useEffect, useRef, useCallback } from 'react';
import { Star, StarfieldConfig, ShootingStar } from '@/types/stars';

const defaultConfig: StarfieldConfig = {
    starCount: 400,
    maxStarSpeed: 0.8,
    minStarSpeed: 0.1,
    maxStarSize: 2,
    minStarSize: 0.5,
    backgroundColor: 'rgba(0, 0, 20, 0.1)',
    starColor: '#ffffff',
    enableTwinkle: true,
    enableShootingStars: true,
    shootingStarInterval: 3000,
};

interface CanvasStarsProps {
    config?: Partial<StarfieldConfig>;
    className?: string;
}

export default function CanvasStars({
    config = {},
    className = ''
}: CanvasStarsProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null); // 修正这里
    const starsRef = useRef<Star[]>([]);
    const shootingStarsRef = useRef<ShootingStar[]>([]);
    const lastShootingStarRef = useRef<number>(0);

    const mergedConfig: StarfieldConfig = {
        ...defaultConfig,
        ...config,
    };

    // 初始化星星
    const initializeStars = useCallback((canvas: HTMLCanvasElement): Star[] => {
        const stars: Star[] = [];
        for (let i = 0; i < mergedConfig.starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() *
                    (mergedConfig.maxStarSize - mergedConfig.minStarSize) + mergedConfig.minStarSize,
                speed: Math.random() *
                    (mergedConfig.maxStarSpeed - mergedConfig.minStarSpeed) + mergedConfig.minStarSpeed,
                opacity: Math.random() * 0.7 + 0.3,
                brightness: Math.random() * 0.5 + 0.5,
                twinkleSpeed: Math.random() * 0.05 + 0.02,
            });
        }
        return stars;
    }, [mergedConfig]);

    // 创建流星
    const createShootingStar = useCallback((canvas: HTMLCanvasElement): ShootingStar => {
        const angle = Math.random() * Math.PI / 4 + Math.PI / 8;
        return {
            x: Math.random() * canvas.width * 0.5 + canvas.width * 0.25,
            y: Math.random() * canvas.height * 0.2,
            length: Math.random() * 50 + 30,
            speed: Math.random() * 10 + 5,
            angle,
            opacity: 1,
            active: true,
        };
    }, []);

    // 绘制星星
    const drawStar = useCallback((ctx: CanvasRenderingContext2D, star: Star) => {
        let opacity = star.opacity;

        if (mergedConfig.enableTwinkle) {
            opacity = star.opacity * (0.7 + 0.3 * Math.sin(Date.now() * star.twinkleSpeed * 0.001));
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 2
        );
        gradient.addColorStop(0, `${mergedConfig.starColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${mergedConfig.starColor}00`);

        ctx.fillStyle = gradient;
        ctx.fill();
    }, [mergedConfig]);

    // 绘制流星
    const drawShootingStar = useCallback((ctx: CanvasRenderingContext2D, star: ShootingStar) => {
        if (!star.active) return;

        ctx.save();
        ctx.translate(star.x, star.y);
        ctx.rotate(star.angle);

        const gradient = ctx.createLinearGradient(0, 0, star.length, 0);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${star.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(100, 150, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(star.length, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        ctx.restore();
    }, []);

    // 更新星星位置
    const updateStars = useCallback((canvas: HTMLCanvasElement, stars: Star[]) => {
        stars.forEach(star => {
            star.x -= star.speed;

            if (star.x < -10) {
                star.x = canvas.width + 10;
                star.y = Math.random() * canvas.height;
                star.opacity = Math.random() * 0.7 + 0.3;
            }
        });
    }, []);

    // 更新流星位置
    const updateShootingStars = useCallback((canvas: HTMLCanvasElement, shootingStars: ShootingStar[]) => {
        shootingStars.forEach((star) => {
            if (!star.active) return;

            star.x += Math.cos(star.angle) * star.speed;
            star.y += Math.sin(star.angle) * star.speed;
            star.opacity -= 0.02;

            if (star.opacity <= 0 ||
                star.x > canvas.width + 50 ||
                star.y > canvas.height + 50) {
                star.active = false;
            }
        });
    }, []);

    // 动画循环
    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const currentTime = Date.now();

        // 清除画布
        ctx.fillStyle = mergedConfig.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 更新和绘制星星
        updateStars(canvas, starsRef.current);
        starsRef.current.forEach(star => drawStar(ctx, star));

        // 处理流星
        if (mergedConfig.enableShootingStars) {
            shootingStarsRef.current = shootingStarsRef.current.filter(star => star.active);

            if (currentTime - lastShootingStarRef.current > mergedConfig.shootingStarInterval &&
                Math.random() < 0.02) {
                shootingStarsRef.current.push(createShootingStar(canvas));
                lastShootingStarRef.current = currentTime;
            }

            updateShootingStars(canvas, shootingStarsRef.current);
            shootingStarsRef.current.forEach(star => drawShootingStar(ctx, star));
        }

        animationRef.current = requestAnimationFrame(animate);
    }, [
        mergedConfig,
        drawStar,
        drawShootingStar,
        updateStars,
        updateShootingStars,
        createShootingStar
    ]);

    // 响应式调整画布大小
    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.scale(dpr, dpr);
        }

        starsRef.current = initializeStars(canvas);
    }, [initializeStars]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        resizeCanvas();
        starsRef.current = initializeStars(canvas);

        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [resizeCanvas, animate, initializeStars]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`}
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
}