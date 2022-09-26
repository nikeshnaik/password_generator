import styles from "./strengthindicator.module.css"


function StrengthIndicator(props) {

    const colorWithStrengthMapping = {
        "WEAK": styles.weak,
        "TOO_WEAK!": styles.too_weak,
        "MEDIUM": styles.medium,
        "STRONG": styles.strong
    }

    const indicatingBars = [1, 1, 1, 1].map((item, id) => {
        return <span key={id} className={colorWithStrengthMapping[props.strength]}></span >
    })

    return (

        <div className={styles.container}>
            <div className={styles.strength_indicator}>
                <span id={styles.strength_meta}>STRENGTH</span>
                <div className={styles.indicator}>
                    <span>{props.strength}</span>
                    <div className={styles.bars}>

                        {indicatingBars}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default StrengthIndicator;