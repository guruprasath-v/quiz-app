import { useState } from 'react';
import Timer from './Timer';

function Sidebar () {
    const [answerDetails, setAnswerDetails] = useState([
        {
         questionNo: 1,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 2,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 3,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 4,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 5,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 6,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 7,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 8,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 9,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 10,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 11,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 12,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 13,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 14,
         attempted: false,
         answered: false,   
        },
        {
         questionNo: 15,
         attempted: false,
         answered: false,   
        },
    ]);
    
    function answeredState(answer) {
         if (answer.attempted) return "attempted";
         return "answered";
    }

    return (
        <aside className='sidebar'>
            <Timer />
            <hr />
            <div className='question-section'>
                {
                    answerDetails.map(elem => {
                        const className = answeredState(elem);
                        return (
                            <div key={elem.questionNo} className={className}>
                                {elem.questionNo}
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}
// export { setAnswerDetails };
export default Sidebar;