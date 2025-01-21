import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import QuizContext from "../utils/context";

function Sidebar() {
    const { setQstnNo, setAnswerDetails, answerDetails, quiz } = useContext(QuizContext);
    const navigate = useNavigate(); // Moved useNavigate here

    console.log(answerDetails);

    function answeredState(answer) {
        if (answer.answered) return "answered";
        if (answer.attempted) return "attempted";
        return "ideal";
    }

    const handleChangeQuestion = (e) => {
        const selectedQuestion = parseInt(e.target.textContent, 10);

        // Update the answerDetails state immutably
        setAnswerDetails((prev) =>
            prev.map((item) =>
                item.questionNo === selectedQuestion
                    ? { ...item, attempted: true }
                    : item
            )
        );

        // Update the question number
        setQstnNo(selectedQuestion);
    };

    const handleSubmit = () => {
        // Navigate to the report page with state
        navigate("/report", { state: { quiz, answerDetails } });
    };

    return (
        <aside className="sidebar">
            <Timer />
            <div className="question-section">
                {answerDetails.map((elem) => {
                    const className = answeredState(elem);
                    return (
                        <div
                            onClick={handleChangeQuestion}
                            key={elem.questionNo}
                            className={className}
                            value={elem.questionNo}
                        >
                            {elem.questionNo}
                        </div>
                    );
                })}
            </div>

            <button onClick={handleSubmit} type="submit">
                Submit
            </button>
        </aside>
    );
}

export default Sidebar;
