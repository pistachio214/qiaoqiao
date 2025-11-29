import { Paper } from "@mui/material";

import { ChatContainer } from "@/components/Chat/Container/container";

import styles from './page.module.scss';


export default function Chat() {
    return (
        <Paper className={`flex flex-1 items-center justify-center ${styles.wrapper}`}>
            <ChatContainer />
        </Paper>
    )
}