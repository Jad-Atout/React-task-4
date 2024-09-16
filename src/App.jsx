import Navbar from "./Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";


function App() {

  return (
    <>
      <Navbar></Navbar>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/Register'} element={<Register/>}/>
            <Route path={'/Login'} element={<Login/>}/>
            <Route path={'*'} element={<h2>Page Not Found</h2>}/>
        </Routes>

    </>
  )
}

export default App
