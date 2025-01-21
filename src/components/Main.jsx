import { Routes, Route  } from "react-router";
import Home from "./Home";
import Quiz from "./Quiz";
import Report from "./Report";

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/test" element={<Quiz />}/>
                <Route path="/report" element={<Report />} />
            </Routes>
        </div>
    )
}

export default Main;