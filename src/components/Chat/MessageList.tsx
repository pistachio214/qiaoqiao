'use client'

import {
    useEffect, useEffectEvent, useRef, useState
} from 'react';
import UserInfo from './UserInfo';

import useAppStore from '@/stores/useAppStore';
import { MessageItem } from '@/types/message';


const OtherMessageItem = (props: MessageItem) => {
    return (
        <div className="max-w-4/5 text-white select-none self-start"
            style={{
                color: 'var(--font-color-focus3)',
                padding: '0.5rem 1rem 0.5rem 1rem',
                backgroundColor: 'var(--chat-receive-bg)',
                borderTopLeftRadius: '1.2rem',
                borderTopRightRadius: '1.2rem',
                borderBottomRightRadius: '1.2rem',
            }}
        >
            {props.text}
        </div>
    );
}

const MeMessageItem = (props: MessageItem) => {
    return (
        <div
            className="max-w-4/5 text-white select-none self-end"
            style={{
                backgroundColor: 'var(--card-active)',
                color: 'var(--font-color-focus3)',
                padding: '0.5rem 1rem 0.5rem 1rem',
                borderTopLeftRadius: '1.2rem',
                borderTopRightRadius: '1.2rem',
                borderBottomLeftRadius: '1.2rem',
            }}>
            {props.text}
        </div>
    );
}

const OutMessage = () => (
    <div
        className='w-full text-center text-[.8rem] pt-1.5! pb-1.5!'
        style={{
            color: 'var(--font-color-tip)'
        }}
    >
        你离开了聊天
    </div>
)

export default function MessageList() {

    const messageBoxRef = useRef<HTMLDivElement>(null);

    const { connect, setConnect } = useAppStore();

    const [messageList, setMessageList] = useState<MessageItem[]>([]);

    const scrollToBottom = useEffectEvent(() => {
        if (messageBoxRef != null && messageBoxRef.current) {
            // 滚动到聊天界面最后一条
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    })

    useEffect(() => {
        const data: MessageItem[] = Array.from({ length: 5 }, ((_, i: number) => {
            return {
                sender: i % 2 === 0 ? 1 : 2, type: 1, text: `message - - - ${i}`, createdAt: new Date()
            };
        }));
        setMessageList(data);
    }, [])

    useEffect(() => {
        scrollToBottom();
    }, [messageList])

    return (
        <div
            className="pl-4! pr-4! pb-3! flex flex-col overflow-y-auto"
            style={{ height: 'calc(100% - 90px)' }}
            ref={messageBoxRef}
        >
            <UserInfo />

            {
                messageList.map((v: MessageItem, index: number) => {
                    if (v.sender === 2) {
                        return <OtherMessageItem key={index} {...v} />
                    } else {
                        return <MeMessageItem key={index} {...v} />
                    }
                })
            }

            <OutMessage />
        </div>
    )
}
