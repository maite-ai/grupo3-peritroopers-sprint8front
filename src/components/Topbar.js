import React from 'react';
import foto from '../assets/images/logo-grupo.gif';
import logo from '../assets/images/logo.gif';

import { Link } from 'react-router-dom';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand-lg navbar-dark navbar-blue bg-dark topbar mb-5 static-top shadow">

					<img src={logo} width="200" height="60" className="d-inline-block align-top" alt="" loading="lazy"></img>
                    {/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" exact='true' to='/'>Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/api/products">Products</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/api/users">Users</Link>
						</li>
						</ul>
					</div>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600">Admin</span>
								<img className="img-profile rounded-circle" src={foto} alt="Admin"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;