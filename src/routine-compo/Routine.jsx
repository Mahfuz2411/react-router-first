import { PropTypes } from "prop-types";

const Routine = ({ routine }) => {
    console.log(routine);
    return (
        <div>
            <h1>Hello from routine</h1>
        </div>
    );
};

Routine.propTypes = {
    routine: PropTypes.array
}

export default Routine;