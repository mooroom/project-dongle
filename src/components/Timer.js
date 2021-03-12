import React, {useState, useEffect} from "react";

function Timer({start}) {
    const [seconds, setSeconds] = useState(15);

    useEffect(() => {
        if (start) {
            const countdown = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                } else {
                    clearInterval(countdown);
                    window.location.href = "/";
                }
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [seconds, start])

    return <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>{seconds}</div>;
}

export default Timer;