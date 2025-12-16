

import { CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "在线聊天",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <CardContent className="h-full overflow-hidden flex justify-center">
            {children}
        </CardContent>
    );
}