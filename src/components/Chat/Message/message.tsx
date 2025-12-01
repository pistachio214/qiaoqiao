'use client'

import {
    useEffect, useEffectEvent, useRef, useState
} from 'react';

import { Box } from '@mui/material';

import OtherMessageItem from './Item/OtherMessageItem';
import MeMessageItem from './Item/MeMessageItem';
import OutMessage from './Out/out';
import { UserCard } from '../UserCard/UserCard';

import { MessageItem } from '@/types/message';

import useAppStore from '@/stores/useAppStore';

import styles from './message.module.scss';

export const ChatMessage = () => {

    const messageBoxRef = useRef<HTMLDivElement>(null);

    const { connect } = useAppStore();

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
        <Box component={'div'} className={styles.messageBox} ref={messageBoxRef}>
            <UserCard />
            {
                connect.messageList.map((v: MessageItem, index: number) => {
                    if (v.sender === 2) {
                        return <OtherMessageItem key={index} {...v} />
                    } else {
                        return <MeMessageItem key={index} {...v} />
                    }
                })
            }
            <OutMessage />
        </Box>
    );
}