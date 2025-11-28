import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "在线聊天",
};

export default function ChatLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Container className="flex-1 flex" sx={{
            paddingLeft: 0,
            paddingRight: 0,
        }}>
            {children}
        </Container>
    );
}
