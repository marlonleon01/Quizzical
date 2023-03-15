import "./Quiz.css"

export function Quiz() {
    //Need to create test with data from api

    
    return (
        <div className="quiz-container">
            <div className="quiz-question-container">
                <h2 className="quiz-question"></h2>
                <div className="quiz-btn-container">
                    <button className="quiz-answer-btn"></button>
                    <button className="quiz-answer-btn"></button>
                    <button className="quiz-answer-btn"></button>
                    <button className="quiz-answer-btn"></button>
                </div>
            </div>
            <button className="check-answers-btn">Check Answers</button>
        </div>
    )
}