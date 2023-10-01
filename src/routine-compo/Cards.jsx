import { PropTypes } from "prop-types";

const Cards = ({ routine }) => {
	console.log(routine);
	return (
		<>
			<div className="card h-full w-full bg-base-100 shadow-xl m-auto">
				<div className="card-body flex flex-col justify-between">
					<h2 className="card-title mx-auto">{routine.subject}</h2>
					<p className="mx-auto text-center">{routine.subjectFull}</p>
					<p className="mx-auto text-center">{routine.teacherFull}</p>
				</div>
			</div>
		</>
	);
};

Cards.propTypes = {
	routine: PropTypes.object,
}

export default Cards;