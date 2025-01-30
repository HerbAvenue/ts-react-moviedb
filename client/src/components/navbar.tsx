import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function NavBar() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get the search query from the input field
    const searchQuery = e.currentTarget.querySelector("input")?.value;

    // If there is a search query, navigate to the search page with the query in the URL
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/PMDLogo.png"
            alt="Logo"
            width="85"
            className="d-inline-block align-text-center"
          />
        </a>

        <form className="d-flex" role="search" onSubmit={handleSubmit}>
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
