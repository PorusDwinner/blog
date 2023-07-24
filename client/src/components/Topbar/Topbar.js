import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Topbar = () => {

  const username = useSelector(state => state.userName);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">BlogPost</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/home' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Features</Link>
              </li>
            </ul>
            <span className="navbar-text">
              {username}
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Topbar