import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import QuizContext from "../utils/context";
import QuizLayout from "./QuizLayout";

function Quiz () {
    const [quiz, setQuiz] = useState(null);
    const [qstnNo, setQstnNo] = useState(1);
    const [answerDetails, setAnswerDetails] = useState([
    {
     questionNo: 1,
     attempted: true,
     answered: false,
     answer: ""  
    },
    {
     questionNo: 2,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 3,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 4,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 5,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 6,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 7,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 8,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 9,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 10,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 11,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 12,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 13,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 14,
     attempted: false,
     answered: false,
     answer: ""   
    },
    {
     questionNo: 15,
     attempted: false,
     answered: false,
     answer: ""   
    },
    ]);
    const navigate = useNavigate();


    console.log(answerDetails);

    function increment() {
        setQstnNo(qstnNo => qstnNo + 1);
    }
    
    function decrement() {
        setQstnNo(qstnNo => qstnNo - 1);
    }

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=15")
        .then((response) => {
            return response.json();
        }).then((result) => {
            setQuiz(result.results);
        })
        .catch(e => console.log(e));
    }, []);

    const contextValue = {
      setQstnNo,
      setAnswerDetails,
      answerDetails,
      quiz
    };
    const mail = JSON.parse(localStorage.getItem('mail'));
    console.log(mail);
    if(mail === "" || mail === null) {
      alert("Please register")
      navigate("/");
      return null;
    }
    return (
      <QuizContext.Provider value={contextValue}>
        <QuizLayout>
          <>
          {quiz && (
            <Question
              quiz={quiz[qstnNo - 1]}
              qstnNo={qstnNo}
              increment={increment}
              decrement={decrement}
              // setAnswers={setAnswers}
              // answers={answers}
            />
          )}
        </>
        </QuizLayout>
      </QuizContext.Provider>
      );
      
}

export default Quiz;