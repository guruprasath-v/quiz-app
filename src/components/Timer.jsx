import { useState, useEffect } from "react";

function Timer() {
    const [mins, setMins] = useState(30);
    const [secs, setSecs] = useState(59);
    const [timeOut, setTimeOut] = useState(false);

    // Start the timer when the component mounts
    useEffect(() => {
        if (mins <= 0 && secs <= 0) {
            console.log("Reached 0.");
            setTimeOut(true); // Mark as timeout
            return; // Exit the effect if time is up
        };    
        const intervalId = setInterval(() => {
            // Decrement seconds
            setSecs(prev => {
                if (prev === 0) {
                    // If seconds are 0, decrement minutes and reset seconds to 59
                    setMins(prevMins => prevMins - 1);
                    return 59;
                } else {
                    return prev - 1;
                }
            });
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [mins, secs]); // Empty dependency array means it runs only once when the component mounts


    return (
        <div className="timer">
            {
                !timeOut ? <>Timer
                <p>{
                    mins < 10 ? <>0{mins}</> : <>{mins}</> 
                } : {
                    secs < 10 ? <>0{secs}</> : <>{secs}</>
                }</p></> 
                : <>Time Limit Exceeded</>
            }
        </div>
    )
}

export default Timer;