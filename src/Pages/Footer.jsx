import React from 'react';
import visa from '../assets/visa.png';
import payme from '../assets/payme.png';
import mastercard from '../assets/mastercard.png';
import {Link} from "react-router-dom";
import {routes} from "../Route/routes.js";
import Icons from "../Component/Icons.jsx";

function Footer(props) {
    return (
        <div className={'footer container my-5'}>
            <div className={'row m-0 g-5'}>
                <div className={'col-12 col-md-4 col-xl-3'}>
                    <h5>Nurota trips</h5>
                    <div className={'d-flex mt-4 gap-1 img-fluid align-items-center'}>
                        <img loading="lazy" src={visa} alt="visa"/>
                        <img loading="lazy" src={mastercard} alt="mastercard"/>
                        <img loading="lazy" src={payme} alt="payme"/>
                    </div>
                </div>
                <div className={'col-12 col-md-4 col-xl-3 d-flex flex-column gap-3'}>
                    <h2>Sentob village house #102</h2>
                    <h2>Nurota, Uzbekistan</h2>
                    <h2><Link to={'Maps.Me Link'}>Google Maps Link</Link> - <Link to={'Maps.Me Link'}>Maps.Me
                        Link</Link>
                    </h2>
                    <h2>Ph: <Link to={'tel:+998959227555'}> +998959227555</Link></h2>
                    <h2>Email: <Link to='mailto:davronn340@gmail.com'>davronn340@gmail.com</Link></h2>
                </div>
                <div className={'col-12 col-md-4 col-xl-3 d-flex flex-column gap-3'}>
                    {
                        routes.map((route, index) =>
                            <h2 key={index}><Link to={route.path}>{route.name}</Link>
                            </h2>
                        )
                    }
                </div>
                <div
                    className={'col-12 col-md-4 col-xl-3 d-flex d-md-none d-xl-flex gap-2 align-items-top justify-content-start justify-content-xl-end'}>
                    <Icons/>
                </div>
            </div>
        </div>
    )
        ;
}

export default Footer;