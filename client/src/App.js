import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Login/>}/>
        <Route exact path="/signup" element = {<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
