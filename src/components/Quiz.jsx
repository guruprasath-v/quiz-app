import { useState, useEffect } from "react";
import Question from "./Question";
import QuizLayout from "./QuizLayout";

function Quiz () {
    const [quiz, setQuiz] = useState(null);
    const [qstnNo, setQstnNo] = useState(1);
    const [answers, setAnswers] = useState({});

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


    return (
        <QuizLayout>
          <>
          {quiz && (
            <Question
              quiz={quiz[qstnNo - 1]}
              qstnNo={qstnNo}
              increment={increment}
              decrement={decrement}
              setAnswers={setAnswers}
              answers={answers}
            />
          )}
        </>
        </QuizLayout>
      );
      
}

export default Quiz;