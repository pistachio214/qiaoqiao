'use client'

import { Box, Button } from "@mui/material";

import useAppStore from "@/stores/useAppStore";
import { ageOptions, sexOptions } from "@/lib/data";

import styles from './EnterChat.module.scss';

export default function EnterChat() {

    const { mate, setConnect } = useAppStore();

    const goChat = () => {
        console.log('匹配信息: ', mate);
        setConnect({
            age: ageOptions[0],
            sex: sexOptions[1],
            location: '成都市',
            tag: ['快乐小狗', '反差er', '人间清醒']
        })
        location.href = "/chat";
    }

    return (
        <Box className={styles.chatBox}>
            <Button
                variant="contained"
                fullWidth
                className={styles.chatBtn}
                onClick={() => goChat()}
            >
                进入聊天
            </Button>
        </Box>
    );
}