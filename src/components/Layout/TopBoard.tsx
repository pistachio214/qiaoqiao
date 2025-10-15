
import style from './Layout.module.scss';

export default function TopBoard() {
    return (
        <div className={style.topBoard}>
            <div className={style.title}>
                升级会员
            </div>
            <div className={style.sub}>
                <span style={{ fontWeight: '800' }}>新用户首购</span> 买一送一
            </div>
            <div className={style.tip}>
                AspenSoung
            </div>
        </div>
    );
}