import { Metadata } from "next";
import { CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "我的标签 - 悄悄",
};

export default function BottleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <CardContent className="h-full overflow-hidden flex justify-center">
            {children}
        </CardContent>
    );
}