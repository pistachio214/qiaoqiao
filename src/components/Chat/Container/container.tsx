
import { Box, Button, Container } from "@mui/material";

import styles from './container.module.scss';
import { ChatMessage } from "../Message/message";

export const ChatContainer = () => {
    return (
        <Container className={`w-full h-full sm:w-sm md:w-md ${styles.container}`}>
            <ChatMessage />

            <Box className={styles.btnBox}>
                <Button variant="contained" fullWidth className={styles.btn}>重新匹配</Button>
            </Box>
        </Container>
    );
}
