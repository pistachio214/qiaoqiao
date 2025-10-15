
import style from './Fotter.module.scss';

export default function Footer() {
    return (
        <footer className={style.footerWrapper}>
            <span className={style.provider}>某ICP备XXXXXXXXXX号-1</span>
            <span className={style.hint}>绿色聊天，遵循秩序，本站24H进行违规举报和内容审核</span>
        </footer>
    );
}