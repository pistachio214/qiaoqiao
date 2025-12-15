
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <span className={styles.provider}>某ICP备XXXXXXXXXX号-1</span>
            <span className={styles.hint}>绿色聊天，遵循秩序，本站24H进行违规举报和内容审核</span>
        </footer>
    );
}