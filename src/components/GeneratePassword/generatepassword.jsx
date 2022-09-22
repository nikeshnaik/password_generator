import styles from './generatepassword.module.css'
import { ReactComponent as ArrowBtn } from '../../assets/images/icon-arrow-right.svg'

function GeneratePassword() {

    return (
        <div className={styles.container}>
            <button className={styles.generate_btn}>
                Generate
                <ArrowBtn className={styles.arrow} />
            </button>
        </div>
    )
}


export default GeneratePassword;