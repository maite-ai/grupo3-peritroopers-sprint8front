import React from 'react';
import foto from '../assets/images/logo-grupo.gif';
import logo from '../assets/images/logo1.gif';
import Users from './Users';
import Products from './Products';

//import {Link, Route, Switch} from 'react-router-dom';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand-lg navbar-light bg-light topbar mb-4 static-top shadow">

					<a><img src={foto} width="200" height="70" className="d-inline-block align-top" alt="" loading="lazy"></img></a>
                    {/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600">Admin</span>
								<img className="img-profile rounded-circle" src={logo} alt="Admin"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;