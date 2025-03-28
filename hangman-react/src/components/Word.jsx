import { useEffect } from "react";


export const Word = ({ setWord, word, lettersSelected, lang}) => {
    useEffect(() => {
        fetch("http://localhost:3333", {
            method: "POST",
            body: new URLSearchParams({ locale: lang}),
        })
            .then((response) => response.json())
            .then((data) => {
                setWord(data.word);
            });
    }, []);
    return word.split("").map((letter, index) => {
        if (letter === " ") {
            return <span key={index}> </span>;
        } else if (letter === "-") {
            return <span key={index}> - </span>;
        }
        else if (lettersSelected.includes(letter)) {
            return <span key={index}>{letter}</span>;
        }
        return <span key={index}> _ </span>;
    });
};
