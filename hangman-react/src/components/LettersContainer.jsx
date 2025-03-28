import { useEffect } from "react";
export const LettersContainer = ({ setLetters, setErrors, word, lettersSelected}) => {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];

    useEffect(() => {
        const keyPressed = (e) => {
            const key = e.key.toLowerCase();
            if (letters.includes(key)) {
                if (!lettersSelected.includes(key)) {
                    setLetters((prevLetters) => {
                        return [...prevLetters, key];
                    });
                    if (!word.includes(key)) {
                        setErrors((prevErrors) => prevErrors + 1);
                    }
                }
            }
        };

        window.addEventListener("keydown", keyPressed);
        return () => {
            window.removeEventListener("keydown", keyPressed);
        };
    });

    return (
        <div>
            <div className="letters-container">
                {letters.map((letter, index) => {
                    if (lettersSelected.includes(letter)) {
                        return (
                            <button key={index} disabled>
                                {letter}
                            </button>
                        );
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => {
                                if (!word.includes(letter)) {
                                    setErrors((prevErrors) => prevErrors + 1);
                                }
                                setLetters((prevLetters) => {
                                    return [...prevLetters, letter];
                                });
                            }}
                        >
                            {letter}
                        </button>
                    );
                })}
            </div>, 
            <p>ou taper sur le clavier</p>
        </div>
    );
};
