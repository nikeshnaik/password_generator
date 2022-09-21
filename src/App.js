import './App.css';
import FilterBox from './components/FilterBox/filterbox';

import { useState } from "react"
import StrengthIndicator from './components/StrengthIndicator/strengthindicator';

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



  return (
    <div className="App">
      <FilterBox filterChecksboxes={filterChecksboxes} characterLen={characterLen} handleCharacterLen={handleCharacterLen} handleCheckbox={handleCheckbox} />
      <StrengthIndicator strength_class="strong" strength_string="WEAK" />
    </div>
  );
}

export default App;
