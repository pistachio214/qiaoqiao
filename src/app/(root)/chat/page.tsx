import EnterMessage from "@/components/Chat/EnterMessage";
import MessageList from "@/components/Chat/MessageList";
import { Button } from "@/components/ui/button";


export default function Chat() {
    return (
        <>
            <div className="h-full md:w-4/5 w-full flex flex-col overflow-hidden">
                <MessageList />

                <EnterMessage />
            </div>

        </>

    );
}