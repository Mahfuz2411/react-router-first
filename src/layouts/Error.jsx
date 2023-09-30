import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center">
            <h1>Error 404</h1>
            <Link to="/"><button>Go back to Home</button></Link>
        </div>
    );
};

export default Error;