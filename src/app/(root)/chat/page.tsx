import EnterMessage from "@/components/Chat/EnterMessage";
import MessageList from "@/components/Chat/MessageList";

import PageTransition from '@/components/PageTransition';

export default function Chat() {
    return (
        <PageTransition className="h-full md:w-4/5 w-full flex flex-col overflow-hidden">
            <MessageList />

            <EnterMessage />
        </PageTransition>
    );
}