'use client'

import { Box } from '@mui/material';

import styles from './message.module.scss';

export const ChatMessage = () => {
    const data = Array(150).fill(0);

    return (
        <Box className={styles.messageBox}>
            {
                data.map((_, index: number) => {
                    return (
                        <div key={index}>message</div>
                    );
                })
            }
        </Box>
    );
}