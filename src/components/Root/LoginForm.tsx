
import styles from './login-form.module.scss';

import { Input } from "@/components/ui/input";

export default function LoginForm() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.formInput}>
                <Input className={styles.input} placeholder='请输入账号~' />
            </div>

            <div className={styles.formInput}>
                <Input className={styles.input} placeholder='请输入密码~' type='password' />
            </div>

            <div className={styles.subContainer}>
                <div className={styles.subBtn}>登录</div>
            </div>
        </div>
    )
}