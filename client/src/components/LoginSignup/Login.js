import '../../styles/Login.css';
import { useState } from "react";
import { setUserName, setLoginState } from "../../slicer/slicer";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    const handelChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({ ...prev, [name]: value }))
    };

    const handelLogin = () => {
        // api to validate user here
        dispatch(setUserName(loginForm.username))
        dispatch(setLoginState())
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-muted text-center'>Hi...Welcome To Blog Post</h1>
            <form className='mt-5'>
                <>
                    <div className='mb-4'>
                        <input type='text' className='form-control' placeholder='Username...'
                            name='username' onChange={(e) => handelChange(e)} />
                    </div>
                    <div className='mb-4'>
                        <input type='text' className='form-control' placeholder='Password...'
                            name='password' onChange={(e) => handelChange(e)} />
                    </div>
                    <div className='d-flex'>
                        <button type="submit" className='btn btn-primary' onClick={() => handelLogin()}>Login</button>
                        <p className='ms-3'>OR</p>
                        <button type="button" className='btn btn-primary ms-3' onClick={() => navigate('/signup')}>Sign Up</button>
                    </div>
                </>
            </form>
        </div>
    )
}

export default Login;
