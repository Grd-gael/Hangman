import { Word } from './components/Word'
import { useState, useEffect } from 'react'
import { LettersContainer } from './components/LettersContainer'
import './App.css'

const App = () => {
  const [word, setWord] = useState("");
  const [letters, setLetters] = useState(["-"]);
  const [errors, setErrors] = useState(0);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fr-FR");

  // Change la langue et recharge la page uniquement si nécessaire
  const handleChangeLang = (e) => {
    const newLang = e.target.value;
    if (newLang !== lang) {
      localStorage.setItem("lang", newLang);
      window.location.reload();
    }
  };

  if (word.split("").every((letter) => letters.includes(letter))) {
    return (
      <main className="site-container">
        <select name="lang" id="lang" onChange={handleChangeLang} value={lang}>
          <option value="fr-FR">Plats | Fr</option>
          <option value="en-GB">Divinité | En</option>
        </select>
        <h1>Pendu</h1>
        <p class="perdu">{errors} / 9</p>
        <Word word={word} setWord={setWord} lettersSelected={letters} lang={lang} />
        <p class="gagner">Bravo, vous avez gagné !</p>
        <a href="" class="btn-gagner">Rejouer</a>
      </main>
    );
  } else if (errors >= 9) {
    return (
      <main className="site-container">
        <select name="lang" id="lang" onChange={handleChangeLang} value={lang}>
          <option value="fr-FR">Plats | Fr</option>
          <option value="en-GB">Divinité | En</option>
        </select>
        <h1>Pendu</h1>
        <p class="perdu">{errors} / 9</p>
        <Word word={word} setWord={setWord} lettersSelected={letters} lang={lang} />
        <p class="perdu">Perdu ! Le mot était : {word}</p>
        <a href="" class="btn-perdu">Rejouer</a>
      </main>
    );
  } else {
    return (
      <main className="site-container">
        <select name="lang" id="lang" onChange={handleChangeLang} value={lang}>
          <option value="fr-FR">Plats | Fr</option>
          <option value="en-GB">Divinité | En</option>
        </select>
        <h1>Pendu</h1>
        <p class="perdu"> {errors} / 9</p>
        <Word word={word} setWord={setWord} lettersSelected={letters} />
        <LettersContainer setLetters={setLetters} setErrors={setErrors} word={word} lang={lang} lettersSelected={letters} />
      </main>
    );
  }
};


export default App
