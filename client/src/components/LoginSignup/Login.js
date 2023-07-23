import '../../styles/Login.css';
import { useState } from "react";
import { setUserName } from "../../slicer/slicer";

const Login = () => {

    const [loginForm , setLoginForm] = useState({
        username : '',
        password : ''
    });

    const handelChange = (e) => {
        const {name , value} = e.target;
        setLoginForm((prev) => ({ ...prev , [name] : value }));
    };

    const handelLogin = () => {
        // api to validate user here
        dispatchEvent(setUserName(loginForm.username));
    }

    return (
        <div className="position-absolute top-50 start-50 p-3 border">
            <form>
                <feildset>
                    <legend className='text-center text-muted'>Hi...Welcome</legend>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Username...'
                        name='username' onChange={(e) => handelChange(e)} />
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Username...'
                        name='password' onChange={(e) => handelChange(e)} />
                    </div>
                </feildset>
            </form>
        </div>
    )
}

export default Login;

{/* <div className="d-flex justify-content-center align-items-center">
            <form>
                <fieldset>
                    <legend className="text-center text-muted">Hi...Welcome back</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Username</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter Username..."
                        name="username" onChange={(e) => handelChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Password</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Password..."
                        name="password" onChange={(e) => handelChange(e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => handelLogin()}>Login</button>
                </fieldset>
            </form>
        </div> */}