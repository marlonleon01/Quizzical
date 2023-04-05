import "./Quiz.css"
import { useContext, useEffect } from "react"
import { Context } from "../../Context"

export function Quiz() {
const {startQuiz, questions} = useContext(Context)

function renderAnswers(question) {
    const incorrectAnswers = question.incorrectAnswer
    const randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1))
    incorrectAnswers.splice(randomIndex, 0, question.correctAnswer)

    return incorrectAnswers.map((answer, answerIndex) => (
        <button key={answerIndex} className="quiz-answer-btn">
            {answer}
        </button>
    ))
}

    return (
        <div className="quiz-container">
            {startQuiz && questions.length > 0 ? (
                <>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="quiz-question-container">
                            <h2 className="quiz-question">{question.question}</h2>
                            <div className="quiz-btn-container">
                                {renderAnswers(question)}
                            </div>
                        </div>
                    ))}
                    <button className="check-answers-btn">Check Answers</button>
                </>
            ) : <div></div>
        }
        </div>
    )
}