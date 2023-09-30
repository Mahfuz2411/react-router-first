import { Outlet } from "react-router-dom"

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
// import Routine from "./routine-compo/Routine";
import { useEffect, useState } from "react";

function App() {
  const [routine , setRoutine] = useState([]);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Mahfuz2411/react-router-first/main/public/routine.json')
    .then(res => res.json())
    .then(data => setRoutine(data))
  },[]);

  // console.log(routine)

  return (
    <div className="text-center">
      <Header></Header>
      <h1>Hello from app</h1>
      <Outlet routine={routine}>
      </Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
