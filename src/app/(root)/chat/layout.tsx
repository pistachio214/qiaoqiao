

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "在线聊天",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-full flex flex-col items-center">
            {children}
        </div>
    );
}