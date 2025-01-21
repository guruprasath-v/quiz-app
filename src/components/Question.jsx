function Question(props) {
    function previous() {
        if (props.qstnNo != 1) props.decrement();
    }

    function next() {
        if (props.qstnNo != 15) props.increment();
    }

    function saveAnswers(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const selectedValue = formData.get(props.qstnNo); 
        
        props.setAnswers(prev => ({...prev, [props.qstnNo]: selectedValue}));  
        next()
    }
    // console.log(props);
    
    const options = [props.quiz.correct_answer, ...props.quiz.incorrect_answers];
    // console.log(options);
    
    options.sort();
    return (
        <div style={{marginLeft: '18vw'}}>
             <div>
                <h3>Q.No</h3>
                <>
                    <span>{props.qstnNo + ".) "}</span>
                    <p dangerouslySetInnerHTML={{ __html: props.quiz.question }}></p>
                </>
             </div>
             <div>
                <form onSubmit={saveAnswers}>
                    {
                        options.map(elem => (
                            <div key={elem}>
                                <input type="radio" id={elem} name={props.qstnNo} value={elem} required/>
                                <label htmlFor={elem}>{elem}</label>
                            </div>
                        ))
                    }
                    <button type="button" onClick={previous}>Prev</button>
                    <button type="submit">Save</button>
                    <button type="button" onClick={next}>Next</button>
                </form>
             </div>
        </div>
    )
}

export default Question;