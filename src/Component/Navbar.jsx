import React, {useEffect} from 'react';
import {routes} from "../Route/routes.js";
import {Link, useLocation} from "react-router-dom";
import logo from "../assets/logo.svg"

function Navbar(props) {

    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                const menu = document.getElementById("navbarSupportedContent");
                menu.classList.remove("show");
                document.body.classList.remove("nav-open");
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [isOpen, setIsOpen] = React.useState(false);

    function toggleNavbar() {
        setIsOpen(!isOpen);
        document.body.classList.toggle("nav-open");
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        width={150}
                        height={100}
                        src={logo}
                        className="img-fluid" alt="..."/>
                </Link>
                <button className="navbar-toggler" onClick={() => toggleNavbar()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'open' : ''}`}
                     id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">
                        {routes.map((route, index) =>
                            <li className="nav-item text-center" key={index}>
                                <Link to={route.path} onClick={() => toggleNavbar()}
                                      className={`nav-link ${location.pathname === route.path && 'text-decoration-underline'}`}>
                                    {route.name}
                                </Link>
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