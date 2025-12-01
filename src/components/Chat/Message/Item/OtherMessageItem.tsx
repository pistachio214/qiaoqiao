'use client';

import { Box } from "@mui/material";

import { MessageItem } from "@/types/message";

import styles from './item.module.scss';

const OtherMessageItem = (props: MessageItem) => {
    return (
        <Box className={`${styles.messageItem} ${styles.otherMessage}`}>
            {props.text}
        </Box>
    )
}

export default OtherMessageItem;