import "./Homescreen.css"

export function Homescreen() {
    return (
        <div className="homescreen">
            <div className="homescreen-container-div">
                <h1 className="homescreen-title">Quizzical</h1>
                <p className="homescreen-description">
                    Answer the questions to test your knowledge
                </p>
                
                <form className="homescreen-form">
                    <label className="homescreen-labels" for="category">
                        Category:
                    </label>
                    {/* Give Values to Options*/}
                    <select id="category">
                        <option>Any Category</option>
                    </select>

                    <label className="homescreen-labels" for="difficulty">
                        Difficulty:
                    </label>
                    <select id="difficulty">
                        <option>Any Difficulty</option>
                    </select>
                    
                    <label className="homescreen-labels" for="type">
                        Type of questions:
                    </label>
                    <select id="type">
                        <option>Any Type</option>
                    </select>
                </form>

                <button className="start-btn">Start quiz</button>
            </div>
        </div>
    )
}