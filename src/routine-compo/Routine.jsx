import { useState, useEffect } from "react";

import Cards from '../layouts/Cards';

const Routine = () => {
    const [routines, setRoutine] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Mahfuz2411/react-router-first/main/public/routine.json')
            .then(res => res.json())
            .then(data => setRoutine(data))
    }, []);
    
    return (
        <div className="container m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                routines.map((routine) => <Cards key={routine.no} routine={routine}></Cards>)
            }
        </div>
    );
};

export default Routine;