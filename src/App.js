import styles from './App.module.css';
import FilterBox from './components/FilterBox/filterbox';
import { useState } from "react"
import StrengthIndicator from './components/StrengthIndicator/strengthindicator';
import { ReactComponent as CopyButton } from './assets/images/icon-copy.svg';
import GeneratePassword from './components/GeneratePassword/generatepassword';
import generatePassword from './services/generatePassword';


function App() {

  let checkboxInitState = {
    "Include Uppercase Letters": false,
    "Include Lowercase Letters": false,
    "Include Numbers": false,
    "Include Symbols": true
  }

  const [filterChecksboxes, setFilterCheckBoxes] = useState(checkboxInitState)
  const [characterLen, setCharacterLen] = useState(8)
  const [generatedPassword, setGeneratedPassword] = useState("Password")
  const [strength, setStrength] = useState("TOO WEAK!")

  const handleCheckbox = (filterName) => {
    let prevState = { ...filterChecksboxes }
    prevState[filterName] = !prevState[filterName]
    setFilterCheckBoxes(prevState)
  }

  const handleCharacterLen = (len) => {

    setCharacterLen(len)

  }

  const handleCopyPassword = (event) => {
    navigator.clipboard.writeText(generatedPassword)

  }

  const handleGeneratePassword = (event) => {

    let param_object = { ...filterChecksboxes }
    param_object['characterLen'] = parseInt(characterLen)

    const [password, strength] = generatePassword(param_object)

    setGeneratedPassword(password)
    setStrength(strength)

  }

  return (
    <>
      <p className={styles.app_name}>Password Generator</p>
      <main className={styles.App}>
        <div className={styles.password_generated}>
          <span className={styles.password}>{generatedPassword}</span>
          <button className={styles.copy_btn} onClick={e => handleCopyPassword(e)}>
            <CopyButton tabIndex={0} />
          </button>
        </div>
        <FilterBox filterChecksboxes={filterChecksboxes} characterLen={characterLen} handleCharacterLen={handleCharacterLen} handleCheckbox={handleCheckbox} />
        <StrengthIndicator strength={strength.replace(" ", "_")} />
        <GeneratePassword handleGeneratePassword={handleGeneratePassword} />
      </main >
    </>
  );
}

export default App;
