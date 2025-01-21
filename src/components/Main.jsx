import { Routes, Route } from "react-router";
import Home from "./Home";
import Quiz from "./Quiz";

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/test" element={<Quiz />}/>
            </Routes>
        </div>
    )
}

export default Main;