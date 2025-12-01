import { Box } from "@mui/material";

import styles from './out.module.scss';

const OutMessage = () => {
    return (
        <Box className={styles.wrapper}>你离开了聊天</Box>
    );
}

export default OutMessage;