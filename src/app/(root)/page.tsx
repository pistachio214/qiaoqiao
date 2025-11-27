import { Container, Paper } from "@mui/material";

import Footer from "@/components/Footer";

import styles from './page.module.scss';

export default function Home() {
  return (
    <Paper elevation={0} component={'div'} className={`flex-1 flex flex-col ${styles.wrapper}`}>
      <Container className="flex-1 flex flex-col border border-amber-300">
        
      </Container>

      <Footer />
    </Paper>
  );
}
