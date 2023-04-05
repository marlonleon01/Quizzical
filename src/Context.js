import {createContext, useState, useEffect} from "react"
import { decode } from "html-entities"

const Context = createContext()

function ContextProvider(props) {
    const [startQuiz, setStartQuiz] = useState(false)
    const [questions, setQuestions] = useState([])

    function getQuiz() {
        setStartQuiz(oldStartQuiz => !oldStartQuiz)
    }

    useEffect(() => {
        if(startQuiz) {
            fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                .then(res => res.json())
                .then(data => {
                    const quizData = data.results
                    const quizDataArr = quizData.map(quiz => {
                        return {
                            question: decode(quiz.question),
                            correctAnswer: decode(quiz.correct_answer),
                            incorrectAnswer: quiz.incorrect_answers.map(answer => decode(answer))
                        }
                    })
                    setQuestions(quizDataArr)
                })
        }
    },[startQuiz])

    return (
        <Context.Provider value={{
            startQuiz,
            getQuiz,
            questions
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}