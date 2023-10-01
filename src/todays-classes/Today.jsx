import { useState, useEffect } from "react";

import Card from './Cards';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Today = () => {
    const [routines, setRoutine] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Mahfuz2411/react-router-first/main/public/routine.json')
            .then(res => res.json())
            .then(data => setRoutine(data))
    });

    const today = new Date();
    const weekday = today.getDay();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    
    const notify = (mssg) => toast(mssg);
    return (
        <div>
            {
                routines.map(routine => days[weekday] in routine? <Card key={routine.no} routine={routine} weekday={days[weekday]} notify={notify}></Card>:undefined)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Today;