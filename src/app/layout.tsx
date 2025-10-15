import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider"

import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "悄悄-在线聊天漂流瓶-同城随机社交聊天平台-树洞",
  keywords: '悄悄,匿名聊天,悄悄聊,交友网,在线聊天室,随机聊天,漂流瓶,同城,随机聊天,叔叔不约，树洞,蹭蹭聊,soul,Omegle,陌路人,陌陌,探探,匿名聊天,shushubuyue.net,wanwanapp.com,cengceng.chat',
  description: "悄悄是一个面向Z世代的在线匿名随机聊天移动社交平台。漂流瓶、随机聊天，同城匹配，快速开始一对一私密聊天。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
