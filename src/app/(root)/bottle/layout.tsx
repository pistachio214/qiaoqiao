import { Metadata } from "next";
import { CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "漂流瓶 - 悄悄",
};

export default function BottleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <CardContent className="h-full overflow-hidden flex justify-center border border-red-500">
            {children}
        </CardContent>
    );
}