import styles from './generatepassword.module.css'
import { ReactComponent as ArrowBtn } from '../../assets/images/icon-arrow-right.svg'

function GeneratePassword(props) {

    return (
        <div className={styles.container}>
            <button className={styles.generate_btn} onClick={e => props.handleGeneratePassword()}>
                Generate
                <ArrowBtn className={styles.arrow} />
            </button>
        </div>
    )
}


export default GeneratePassword;