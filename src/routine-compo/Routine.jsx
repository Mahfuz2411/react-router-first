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
        <>
            <h1 className=" container md:animate-bounce text-red-400 text-2xl md:text-3xl mx-auto text-center">Class time will be added soon here. For now you can just see taday&apos;s by clicking on &quot;TODAY&quot; button. </h1>
            <div className="container m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    routines.map((routine) => <Cards key={routine.no} routine={routine}></Cards>)
                }
            </div>
        </>
    );
};

export default Routine;