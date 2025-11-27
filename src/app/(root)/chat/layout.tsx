import { Metadata } from "next";

export const metadata: Metadata = {
    title: "在线聊天",
};

export default function ChatLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
