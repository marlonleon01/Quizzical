import {useEffect, useState} from "react"
import { Homescreen } from "./Components/Homescreen/Homescreen"
import { Quiz } from "./Components/Quiz/Quiz"
import blob1 from "./images/blobs.png"
import blob2 from "./images/blob 5.png"

export function App() {
    //make start button do something
    const [startQuiz, setStartQuiz] = useState(false)
    const [questions, setQuestions] = useState([])

    function getQuiz() {
        setStartQuiz(oldStartQuiz => !oldStartQuiz)
    }
    
    function shuffle(array) {
        const shuffeldArray = [...array]
        for (let i = shuffeldArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [shuffeldArray[i], shuffeldArray[j]] = [shuffeldArray[j], shuffeldArray[i]]
        }
        return shuffeldArray
    }

    useEffect(() => {
        if(startQuiz) {
            fetch("https://opentdb.com/api.php?amount=5")
                .then(res => res.json())
                .then(data => setQuestions(data.results.map(data => {
                    const options = shuffle([...data.incorrect_answer, data.correct_answer])
                    
                    return({
                        question:data.question,
                        options:options,
                        selectAnswer: undefined,
                        correctAnswer: data.correct_answer
                    })
                })))
    
        }
    },[startQuiz])
    //after fetch return quiz with props filled

    return (
        <main>
            <img src={blob1} className="blob1"></img>
            {
                startQuiz ? 
                <Quiz 
                    questions={questions}
                /> : 
                <Homescreen 
                    handleClick={getQuiz}
                />
            }
            <img src={blob2} className="blob2"></img>
        </main>
    )
}

