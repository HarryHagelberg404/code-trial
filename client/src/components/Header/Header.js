import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-head">
      <nav>
        <ul>
          <Link to="/">
            <div className="logo">
              <img src="./fortnox_logo_svart.svg" />
            </div>
          </Link>
          <Link to="/addbox">
            <li>
              <p>Add Box</p>
            </li>
          </Link>
          <Link to="/listboxes">
            <li>
              <p>List Boxes</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
