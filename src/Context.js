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
            fetch("https://opentdb.com/api.php?amount=5")
                .then(res => res.json())
                .then(data => console.log(data))
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