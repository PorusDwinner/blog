import { useState } from 'react';
import { setUserName } from '../../slicer/slicer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  })

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handelSubmit = () => {
    dispatch(setUserName(userDetails.username))
  }

  return (
    <div>
      <h1 className='text-center mt-5 text-muted'>Register On Blog Post For Free</h1>
      <form className='container mt-5'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input type="email" name="username" className="form-control" aria-describedby="emailHelp" onChange={(e) => handelChange(e)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" onChange={(e) => handelChange(e)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <div className='d-flex'>
          <button type="submit" className="btn btn-primary" onClick={() => handelSubmit()}>Sign up</button>
          <p className='ms-3'>OR</p>
          <button type='button' className="btn btn-primary ms-3" onClick={() => navigate('/')}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Signup