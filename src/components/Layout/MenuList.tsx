
import TopBoard from './TopBoard';
import MenuCell from './MenuCell';

import style from './Layout.module.scss';

export default function MenuList() {
    return (
        <div className={`min-h-screen flex flex-col ${style.menuList}`}>
            <TopBoard />

            <MenuCell />
        </div>
    )
}