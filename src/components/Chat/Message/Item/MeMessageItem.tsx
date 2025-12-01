'use client'

import { Box } from "@mui/material";

import { MessageItem } from "@/types/message";

import styles from './item.module.scss';

const MeMessageItem = (props: MessageItem) => {
    return (
        <Box className={`${styles.messageItem} ${styles.myMessage}`}>
            {props.text}
        </Box>
    )
}

export default MeMessageItem;