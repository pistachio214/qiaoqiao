import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import ViewportHeightProvider from '@/components/ViewportHeightProvider';

import "./globals.css";
import AnimatedStars from "@/components/AnimatedStars/AnimatedStars";

// Roboto 字体无需依赖 Google Fonts 直连（Next.js 会自动优化）
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  icons: '/logo.svg',
  title: "悄悄-在线聊天漂流瓶-随机社交聊天平台",
  keywords: '悄悄,匿名聊天,悄悄聊,随机聊天,漂流瓶,陌路人',
  description: "悄悄是一个面向Z世代的在线匿名随机聊天移动社交平台。漂流瓶、随机聊天，快速开始一对一私密聊天。",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="zh-CN" className={roboto.variable}>
      <body className="bg-(--color-body)">
        <AnimatedStars />
        {/* 🔴 引入客户端组件处理视口高度 */}
        <ViewportHeightProvider>
          <div className={'app-container bg-transparent'}>
            {children}
          </div>
        </ViewportHeightProvider>
      </body>
    </html>
  );
}
