import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="PMDLogo.png"
            alt="Logo"
            width="85"
            className="d-inline-block align-text-center"
          />
        </a>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
