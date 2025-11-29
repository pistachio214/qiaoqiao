'use client'

import { Box } from '@mui/material';

import styles from './message.module.scss';
import { useEffect, useRef, useState } from 'react';

const MeMessage = (props: { message: string }) => {
    return (
        <Box className={`${styles.messageItem} ${styles.myMessage}`}>
            我的: {props.message}
        </Box>
    )
}

const OtherMessage = (props: { message: string }) => {
    return (
        <Box className={`${styles.messageItem} ${styles.otherMessage}`}>
            对方的: {props.message}
        </Box>
    )
}

export const ChatMessage = () => {
    const messageBoxRef = useRef<HTMLDivElement>(null);

    const [messageList, setMessageList] = useState<number[]>([]);

    useEffect(() => {
        const data = Array.from({ length: 150 }, ((_, i: number) => i));
        setMessageList(data);
    }, [])

    useEffect(() => {
        if (messageBoxRef != null && messageBoxRef.current && messageList.length > 0) {
            // 滚动到聊天界面最后一条
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    }, [messageList])

    return (
        <Box component={'div'} className={styles.messageBox} ref={messageBoxRef}>
            {
                messageList.map((v: number, index: number) => {
                    if (v % 2 == 0) {
                        return <OtherMessage key={index} message={`${v}`} />
                    } else {
                        return <MeMessage key={index} message={`${v}`} />
                    }
                })
            }
        </Box>
    );
}