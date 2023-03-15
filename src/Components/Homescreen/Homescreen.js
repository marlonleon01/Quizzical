import "./Homescreen.css"

export function Homescreen(props) {
    return (
        <div className="homescreen">
            <div className="homescreen-container-div">
                <h1 className="homescreen-title">Quizzical</h1>
                <p className="homescreen-description">
                    Answer the questions to test your knowledge
                </p>
                <button className="start-btn" onClick={props.handleClick}>Start quiz</button>
            </div>
        </div>
    )
}