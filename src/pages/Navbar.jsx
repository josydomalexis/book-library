import {

  Link

} from "react-router-dom";

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><b>LIBRARY Management</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="me-auto">

          </div>
          <div className='d-flex'>
            <Link to={"/admin"} className="btn btn-warning" type="submit">Admin Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
