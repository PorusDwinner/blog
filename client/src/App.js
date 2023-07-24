import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Topbar from "./components/Topbar/Topbar";

function App() {

  const loginState = useSelector(state => state.loginState);

  return (
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route exact path="/" element={ loginState ? <Home/> : <Login/> } />
        <Route exact path="/signup" element={ <Signup/> } />
        <Route exact path="/home" element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
