
import Image from 'next/image';

import style from './MenuList.module.scss';


const TopBoard = () => {
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

const MenuCell = () => {
    return (
        <>
            <div className={`flex items-center ${style.menuCell}`}>
                <div className={style.iconContainer} style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                    <Image src={'/logo.svg'} width={18} height={18} alt='' />
                </div>
                <div className={style.fontTitleMini}>首页</div>
            </div>

            <div className={`flex items-center ${style.menuCell}`}>
                <div className={style.iconContainer} style={{ backgroundColor: 'rgb(0, 183, 255)' }}>
                    <Image
                        src={'/bottle.svg'}
                        width={14}
                        height={14}
                        alt=''
                        style={{
                            color: 'transparent'
                        }}
                    />
                </div>
                <div className={style.fontTitleMini}>漂流瓶</div>
            </div>

            <div className={`flex items-center ${style.menuCell}`}>
                <div className={style.iconContainer}
                    style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        fontSize: '11px',
                        fontWeight: 800
                    }}
                >
                    <span style={{ color: 'rgb(11, 148, 246)' }}>F</span>
                    <span style={{ color: 'rgb(3, 156, 121)' }}>M</span>
                </div>
                <div className={style.fontTitleMini}>广播</div>
            </div>
        </>
    )
}

export default function MenuList() {
    return (
        <div className={`min-h-screen flex flex-col ${style.menuList}`}>
            <TopBoard />

            <MenuCell />

        </div>
    )
}