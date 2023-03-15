import { Homescreen } from "./Components/Homescreen/Homescreen"
import { Quiz } from "./Components/Quiz/Quiz"
import blob1 from "./images/blobs.png"
import blob2 from "./images/blob 5.png"

export function App() {
    return (
        <main>
            <img src={blob1} className="blob1"></img>
            <Homescreen />
            <Quiz />
            <img src={blob2} className="blob2"></img>
        </main>
    )
}

