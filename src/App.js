import styles from './App.module.css';
import FilterBox from './components/FilterBox/filterbox';
import { useState } from "react"
import StrengthIndicator from './components/StrengthIndicator/strengthindicator';
import { ReactComponent as CopyButton } from './assets/images/icon-copy.svg';
import GeneratePassword from './components/GeneratePassword/generatepassword';


function App() {

  let checkboxInitState = {
    "Include Uppercase Letters": false,
    "Include Lowercase Letters": false,
    "Include Numbers": false,
    "Include Symbols": true
  }

  const [filterChecksboxes, setFilterCheckBoxes] = useState(checkboxInitState)
  const [characterLen, setCharacterLen] = useState(1)

  const handleCheckbox = (filterName) => {
    let prevState = { ...filterChecksboxes }
    prevState[filterName] = !prevState[filterName]
    setFilterCheckBoxes(prevState)
  }

  const handleCharacterLen = (len) => {

    setCharacterLen(len)

  }

  const handleCopyPassword = (event) => {
    console.log(event.target)
    // Todo: Copy from logic not from html tree

  }

  const handleGeneratePassword = (event) => {
    console.log("Generate Password")
  }


  return (
    <>
      <p className={styles.app_name}>Password Generator</p>
      <main className={styles.App}>
        <div className={styles.password_generated}>
          <span className={styles.password}>P4$5W0rD!</span>
          <button className={styles.copy_btn} onClick={e => handleCopyPassword(e)}>
            <span id={styles.copied}>COPIED</span>
            <CopyButton />
          </button>
        </div>
        <FilterBox filterChecksboxes={filterChecksboxes} characterLen={characterLen} handleCharacterLen={handleCharacterLen} handleCheckbox={handleCheckbox} />
        <StrengthIndicator strength_class="strong" strength_string="WEAK" />
        <GeneratePassword handleGeneratePassword={handleGeneratePassword} />
      </main >
    </>
  );
}

export default App;
