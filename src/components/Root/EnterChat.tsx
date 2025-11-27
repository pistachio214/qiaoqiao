'use client'

import { Box, Button } from "@mui/material";

import useAppStore from "@/stores/useStore";

import styles from './EnterChat.module.scss';

export default function EnterChat() {

    const { mate } = useAppStore();

    return (
        <Box className={styles.chatBox}>
            <Button variant="contained" fullWidth className={styles.chatBtn} onClick={() => {
                console.log(mate)
            }}>
                进入聊天
            </Button>
        </Box>
    );
}