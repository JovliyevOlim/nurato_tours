import React from 'react';
import {routes} from "../Route/routes.js";
import {Link, useLocation} from "react-router-dom";
import logo from "../assets/logo.svg"

function Navbar(props) {

    const location = useLocation();


    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-white">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        width={150}
                        height={100}
                        src={logo}
                        className="img-fluid" alt="..."/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {routes.map((route, index) =>
                            <li className="nav-item text-center" key={index}>
                                <a className={`nav-link ${location.pathname === route.path && 'text-decoration-underline'}`}
                                   href={route.path}>{route.name}</a>
                            </li>
                        )
                        }
                    </ul>
                    {/*<div*/}
                    {/*    className={'d-flex gap-3 align-items-top justify-content-center justify-content-xl-end'}>*/}
                    {/*    <Icons/>*/}
                    {/*</div>*/}
                    {/*<div className="mt-3 mt-md-0 ms-md-3 d-flex justify-content-center">*/}
                    {/*    <Link to='/booking'>*/}
                    {/*        <button className="btn btn-danger">*/}
                    {/*            Book Now*/}
                    {/*        </button>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </nav>);
}

export default Navbar;