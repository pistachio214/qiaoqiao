import MessageList from "@/components/Chat/MessageList";


export default function Chat() {
    return (
        <div className="h-full md:w-4/5 w-full flex flex-col">
            <MessageList />

            <div style={{ height: '62px', border: '1px solid red', color: '#fff' }}>
                <div>输入</div>
            </div>
        </div>
    );
}