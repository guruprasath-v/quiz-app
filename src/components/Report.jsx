import { useLocation } from "react-router-dom";
// import "./Report.css";    // Import the CSS file

function Report() {
    const location = useLocation();
    const userMail = localStorage.getItem("mail");

    const { quiz, answerDetails } = location.state || {};

    let answeredQuestions = 0;
    answerDetails.forEach((element) => {
        if (element.answer !== "") answeredQuestions += 1;
    });

    let correctAnswer = 0;
    function answerCheck() {
        answerDetails.forEach((answer) => {
            if (answer.answer === quiz[answer.questionNo - 1].correct_answer)
                correctAnswer += 1;
        });
    }

    // Run answer check
    answerCheck();

    return (
        <div className="report-container">
            <h2>User {userMail}'s Quiz Report</h2>
            <div className="summary">
                <div>
                    <h5>Total Questions:</h5>
                    <p>{quiz.length}</p>
                </div>
                <div>
                    <h5>Questions Answered:</h5>
                    <p>{answeredQuestions}</p>
                </div>
                <div>
                    <h5>Correct Answers:</h5>
                    <p>{correctAnswer}</p>
                </div>
            </div>
            <div className="answers-header">
                <div>Question</div>
                <div>Your Answer</div>
                <div>Correct Answer</div>
            </div>
            <div className="answers-section">
                {answerDetails.map((answer, index) => {
                    const isCorrect =
                        answer.answer ===
                        quiz[answer.questionNo - 1].correct_answer;
                    return (
                        <div key={index} className="answer-row">
                            <div className="question">
                                {quiz[answer.questionNo - 1].question}
                            </div>
                            <p
                                className={`answer ${
                                    isCorrect ? "correct" : "incorrect"
                                }`}
                            >
                                {answer.answer === "" ? "NA" : answer.answer}
                            </p>
                            <p className="correct-answer">
                                {quiz[answer.questionNo - 1].correct_answer}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="footer">Great Attempt 👍</div>
        </div>
    );
}

export default Report;
