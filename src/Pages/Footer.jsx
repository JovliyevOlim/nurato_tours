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
                    <h2>Sentob village house 102</h2>
                    <h2>Sentob/Nurota, Uzbekistan</h2>
                    <h2><Link target="_blank" rel="noopener noreferrer"
                              to="https://www.google.com/maps/place/40%C2%B036'18.7%22N+66%C2%B040'20.1%22E/@40.605202,66.6696661,658m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d40.605202!4d66.672241?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D">Google
                        Maps Link</Link> -
                        <Link target="_blank" rel="noopener noreferrer"
                              to="https://maps.apple.com/place?address=Navoiy,%20Uzbekistan&auid=17462142806541862057&coordinate=40.605231,66.672125&lsp=6489&name=Navoiy&map=explore">Maps.me</Link>
                    </h2>
                    <h2>Whatsapp: +99895 922 75 55 (Whatsapp message link)</h2>
                    <h2>Telegram: +99895 922 75 55</h2>
                    <h2>Phone: <Link target="_blank" rel="noopener noreferrer"
                                     to={'tel:+998959227555'}> +99895 922 75 55</Link></h2>
                    <h2>Email: <Link target="_blank" rel="noopener noreferrer"
                                     to='mailto:davronn340@gmail.com'>davronn340@gmail.com</Link></h2>
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