import { useSelector } from "react-redux"
import Login from "../components/LoginSignup/Login"
import Signup from "../components/LoginSignup/Signup"

const LoginSignup = () => {

  const loginState = useSelector(state => state.loginState);

  return (
    <div>
    {
        loginState ? <Login/> : <Signup/>
    }    
    </div>
  )
}

export default LoginSignup