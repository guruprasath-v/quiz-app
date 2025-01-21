import { useContext } from "react";
import QuizContext from '../utils/context';


function Question(props) {
    const { setAnswerDetails } = useContext(QuizContext);


    console.log(props);
    
    function previous() {
        if (props.qstnNo !== 1) props.decrement();
    }

    function next() {
        setAnswerDetails((prev) =>
            prev.map((item) =>
                item.questionNo === props.qstnNo + 1
                    ? { ...item, attempted: true } 
                    : item
            )
        );
        if (props.qstnNo !== 15) props.increment();
    }

    function saveAnswers(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const selectedValue = formData.get(props.qstnNo); 
        
        setAnswerDetails((prev) =>
            prev.map((item) =>
                item.questionNo === props.qstnNo
                    ? { ...item, answer: selectedValue, answered: true } 
                    : item
            )
        ); 
        next()
    }
    // console.log(props);
    
    const options = [props.quiz.correct_answer, ...props.quiz.incorrect_answers];
    // console.log(options);
    
    options.sort();
    return (
        <div className="question-container">
             <div className="questions">
                <h3>Questions</h3>
                <br />
                <>
                    <span>{props.qstnNo + ".) "}</span>
                    <p dangerouslySetInnerHTML={{ __html: props.quiz.question }}></p>
                </>
             </div>
             <div className="options">
                <form onSubmit={saveAnswers}>
                    <div className="options-grids">
                        {
                            options.map(elem => (
                                <div key={elem}>
                                    <input type="radio" id={elem} name={props.qstnNo} value={elem} required/>
                                    <label htmlFor={elem} dangerouslySetInnerHTML={{ __html: elem }}></label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="buttons">
                        <button type="button" onClick={previous}>⏮️ Prev</button>
                        <button type="submit">Save</button>
                        <button type="button" onClick={next}>Next ⏭️</button>
                    </div>
                </form>
             </div>
        </div>
    )
}

export default Question;