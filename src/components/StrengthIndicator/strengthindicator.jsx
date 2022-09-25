import styles from "./strengthindicator.module.css"


function StrengthIndicator(props) {

    const colorWithStrengthMapping = {
        "weak": styles.weak,
        "too_weak": styles.too_weak,
        "medium": styles.medium,
        "strong": styles.strong
    }

    const indicatingBars = [1, 1, 1, 1].map((item, id) => {
        return <span key={id} className={colorWithStrengthMapping[props.strength_class]}></span >
    })

    return (

        <div className={styles.container}>
            <div className={styles.strength_indicator}>
                <span id={styles.strength_meta}>STRENGTH</span>
                <div className={styles.indicator}>
                    <span>{props.strength_string}</span>
                    <div className={styles.bars}>
                        {/* Todo Add bar_color class to based on password strength */}
                        {/* <span className={styles.bar_color}></span>
                    <span></span>
                    <span></span>
                    <span></span> */}
                        {indicatingBars}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default StrengthIndicator;