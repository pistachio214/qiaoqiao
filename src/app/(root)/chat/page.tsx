import { Container, Paper, Box, Button } from "@mui/material";

import styles from './page.module.scss';

export default function Chat() {
    return (
        <Paper className={`flex flex-1 items-center justify-center  ${styles.wrapper}`}>
            <Container className={`w-full h-full sm:w-sm md:w-md ${styles.container}`}>
                <Box className={styles.messageBox}>message</Box>
                <Box className={styles.btnBox}>
                    <Button variant="contained" fullWidth className={styles.btn}>重新匹配</Button>
                </Box>
            </Container>
        </Paper>
    )
}