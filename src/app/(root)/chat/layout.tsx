import { Metadata } from "next";
import { CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "在线聊天 - 悄悄",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <CardContent className="h-full overflow-hidden flex justify-center">
            {children}
        </CardContent>
    );
}