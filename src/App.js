import {useState} from "react"
import { Homescreen } from "./Components/Homescreen/Homescreen"
import { Quiz } from "./Components/Quiz/Quiz"
import blob1 from "./images/blobs.png"
import blob2 from "./images/blob 5.png"

export function App() {
    //make start button do something
    const [startQuiz, setStartQuiz] = useState(false)

    function getQuiz() {
        setStartQuiz(true)
    }
    
    //after fetch return quiz with props filled

    return (
        <main>
            <img src={blob1} className="blob1"></img>
            {
                startQuiz ? 
                <Quiz /> : 
                <Homescreen 
                    handleClick={getQuiz}
                />
            }
            <img src={blob2} className="blob2"></img>
        </main>
    )
}

