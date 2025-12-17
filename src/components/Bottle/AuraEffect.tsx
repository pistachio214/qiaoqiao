
import styles from './aura-effect.module.scss';

interface IProps {

}

export default function AuraEffect(props: IProps) {
    return (
        // 扩散的容器
        <div className={styles.auraContainer}>
            {/* 扩散中心 */}
            <div className={styles.coreElement}>
                探索
            </div>

            {/* 光圈层（多层叠加实现连续扩散） */}
            <div className={`${styles.auraLayer} ${styles.layerOne}`}></div>
            <div className={`${styles.auraLayer} ${styles.layerTwo}`}></div>
            <div className={`${styles.auraLayer} ${styles.layerThree}`}></div>
        </div>
    );
}