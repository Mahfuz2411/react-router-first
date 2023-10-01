import { PropTypes } from "prop-types";

const Cards = ({ routine, weekday, notify }) => {

    const classObj = routine[weekday];

    function parseTime(timeString) {
        const parts = timeString.split(":");
        const hour = parseInt(parts[0]);
        const minute = parseInt(parts[1]);
        const second = parseInt(parts[2]);

        return {
            hour,
            minute,
            second
        };
    }
    function getCurrentDateTime() {
        const currentDate = new Date();
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const second = currentDate.getSeconds();

        return {
            hour,
            minute,
            second
        };
    }
    function convertSecondsToTime(durationInSeconds) {
        const hours = Math.floor(durationInSeconds / (60*60));
        let remainingSecond = durationInSeconds - hours*60*60;
        const minutes = Math.floor(remainingSecond / 60);
        const seconds = remainingSecond - minutes*60;
        

        return {
            hours,
            minutes,
            seconds
        };
    }
    // console.log(classObj.start_time, classObj.end_time);

    const startTime = parseTime(classObj.start_time);
    const endTime = parseTime(classObj.end_time);
    const curTime = getCurrentDateTime();

    // console.log(startTime, endTime, curTime);


    const timeDiff = (startTime, endTime, curTime) => {
        const s = startTime.hour * 60 * 60 + startTime.minute * 60 + startTime.second;
        const e = endTime.hour * 60 * 60 + endTime.minute * 60 + endTime.second;
        const c = curTime.hour * 60 * 60 + curTime.minute * 60 + curTime.second;

        // console.log(s, e, c);

        if (e < c) { return "Finished" }
        else if (s <= c && e >= c) return "Running";
        const diff = convertSecondsToTime(s - c);
        return `${diff.hours} hours ${diff.minutes} minutes ${diff.seconds} seconds left`
    }

    const cName = timeDiff(startTime, endTime, curTime) === "Finished" ? "bg-red-100" : timeDiff(startTime, endTime, curTime) == "Running" ? "bg-yellow-100" : "bg-green-100";





    return (
        <div onClick={() => notify(timeDiff(startTime, endTime, curTime))}>
            <div className={`card max-w-90 bg-base-100 shadow-xl border-2 ${cName}`}>
                <div className="card-body m-auto ">
                    <h2 className="card-title m-auto">{routine.subjectFull}</h2>
                    <p className="text-center">Time: {classObj.start_time}-{classObj.end_time}</p>
                    <p className="text-center">{timeDiff(startTime, endTime, curTime)}</p>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    routine: PropTypes.object,
    weekday: PropTypes.string,
    notify: PropTypes.func
}

export default Cards;