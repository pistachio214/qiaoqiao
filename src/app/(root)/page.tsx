
import Footer from "@/components/custom/Footer";

import style from './page.module.scss';
import CanvasStars from "@/components/CanvasStars/CanvasStars";

export default function Home() {
  const customConfig = {
    starCount: 500,
    maxStarSpeed: 1.2,
    minStarSpeed: 0.2,
    maxStarSize: 2.5,
    minStarSize: 0.3,
    backgroundColor: 'rgba(5, 5, 30, 0.08)',
    starColor: '#aab6ff',
    enableTwinkle: true,
    enableShootingStars: true,
    shootingStarInterval: 2000,
  };

  return (
    <div className={`min-h-screen font-sans flex-1 ${style.homeWrapper}`}>
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start border border-red-600">
        <CanvasStars config={customConfig} className={'border border-red-800 height-[200px]'} />
      </main>

      <Footer />
    </div>
  );
}
