import styles from "./filterbox.module.css"

function FilterBox(props) {


    let checkboxes = Object.keys(props.filterChecksboxes).map((filterName, idx) => {
        return (
            <div className={styles.filterContainer} key={idx}>
                <input type="checkbox"
                    defaultChecked={props.filterChecksboxes[filterName]}
                    name={filterName}
                    value={props.filterChecksboxes[filterName]}
                    onClick={e => props.handleCheckbox(filterName)}
                />
                <label>{filterName}</label>
            </div>

        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.slider_meta}>
                <span>Character Length</span>
                <span>{props.characterLen}</span>
            </div>
            <input id={styles.slider} type="range" min="1" max="20" value={props.characterLen} onChange={e => props.handleCharacterLen(e.target.value)} />
            <div className={styles.checkboxContainer}>
                {checkboxes}
            </div>
        </div>
    )
}

export default FilterBox;

