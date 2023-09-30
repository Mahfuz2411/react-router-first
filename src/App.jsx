import { Outlet } from "react-router-dom"

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="text-center">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
