import {useEffect, useState, useContext} from "react"
import { Homescreen } from "./Components/Homescreen/Homescreen"
import { Quiz } from "./Components/Quiz/Quiz"
import { Context } from "./Context"
import blob1 from "./images/blobs.png"
import blob2 from "./images/blob 5.png"

export function App() {
    const {startQuiz, questions, getQuiz} = useContext(Context)

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

