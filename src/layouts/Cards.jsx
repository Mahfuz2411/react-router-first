import { PropTypes } from "prop-types";

const Cards = ({ routine }) => {
	console.log(routine);
	return (
		<>
			<div className="card h-full w-full bg-base-100 shadow-xl m-auto">
				<div className="card-body">
					<h2 className="card-title m-auto">{routine.subject}</h2>
					<p>{routine.subjectFull}</p>
				</div>
			</div>
		</>
	);
};

Cards.propTypes = {
	routine: PropTypes.object,
}

export default Cards;