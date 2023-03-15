import {useState} from "react"
import { Homescreen } from "./Components/Homescreen/Homescreen"
import { Quiz } from "./Components/Quiz/Quiz"
import blob1 from "./images/blobs.png"
import blob2 from "./images/blob 5.png"

export function App() {
    //make start button do something

    function getQuiz() {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                return (
                    <Quiz 
                        question={data.results[0].question}
                        incorrectAnswers={data.results[0].incorrect_answers}
                        correctAnswer={data.results[0].correct_answer}
                    />
                )
            })
    }
    //after fetch return quiz with props filled

    return (
        <main>
            <img src={blob1} className="blob1"></img>
            <Homescreen 
                handleClick={getQuiz}
            />
            <img src={blob2} className="blob2"></img>
        </main>
    )
}

