import Image from "next/image";

import { Container, Paper, Box, Typography } from "@mui/material";

import SexSelect from "@/components/Root/SexSelect";
import EnterChat from "@/components/Root/EnterChat";
import Footer from "@/components/Footer";

import styles from './page.module.scss';

export default function Home() {

  return (
    <Paper elevation={0} component={'div'} className={`flex-1 flex flex-col ${styles.wrapper}`}>
      <Container className="flex-1 flex flex-col justify-between">

        <Box className={styles['title-logo']}>
          <Image src={'/logo.svg'} alt="logo" loading="eager" width={120} height={120} />
          <Box className={'flex flex-row justify-center items-center'}>
            <Typography className={styles['title-text']}>悄悄</Typography>
          </Box>
          <Box className={`flex flex-row justify-center items-center`}>
            <div className={styles.dot} />
            <Typography className={styles.desc}>1232131231 人正在匹配中</Typography>
          </Box>
        </Box>

        <SexSelect />

        <EnterChat />

      </Container>

      <Footer />
    </Paper>
  );
}
