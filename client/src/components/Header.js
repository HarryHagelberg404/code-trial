import { Link } from "react-router-dom";



function Header() {
  	return (
		<header className="main-head">
			<nav>
			<Link to="/">
		  		<div className="logo">
		  			<a><img src="./fortnox_logo_svart.svg" /></a>
		  		</div>
			</Link>
		  		<ul>
					<Link to="/addbox">
			  			<li>
							<a>Form</a>
			  			</li>
					</Link>
					<Link to="/listboxes">
			  			<li>
							<a>List Boxes</a>
			  			</li>
					</Link>
		  		</ul>
			</nav>
	  	</header>
  	);
}

export default Header;
