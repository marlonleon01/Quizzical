import {createContext, useState, useEffect} from "react"

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
                            question: quiz.question,
                            correctAnswer: quiz.correct_answer,
                            incorrectAnswer: quiz.incorrect_answers
                        }
                    })
                    setQuestions(quizDataArr)
                })
        }
    },[startQuiz])

    return (
        <Context.Provider value={{
            startQuiz,
            getQuiz
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}