import React from 'react';
import ContactImage from "./ContactImage.jsx";
import Contact from "../Home/Contact.jsx";
import {Link} from "react-router-dom";

function ContactUs(props) {
    return (
        <div className={'contact-us'}>
            <div className='container'>
                <ContactImage/>
                <div className="row g-5 mt-5">
                    {/* Google Maps */}
                    <div className="col-12 col-lg-6"
                         style={{minHeight: '450px'}}>
                        <div className="position-relative h-100">
                            <iframe
                                className="position-relative w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1192.1356568642766!2d66.6705512!3d40.605202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM2JzE4LjciTiA2NsKwNDAJMjAuMSJF!5e0!3m2!1sen!2s!4v1693663680000!5m2!1sen!2s"
                                frameBorder="0"
                                style={{minHeight: '450px', border: 0}}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Google Map - Nurota Trip"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-12 col-lg-6">
                        <h4>Address: Sentob village, house 102</h4>
                        <h4>Sentob/Nurota, Uzbekistan</h4>
                        <h4>You can also find us using the <a target="_blank" rel="noopener noreferrer"
                                                              href="https://www.google.com/maps/place/40%C2%B036'18.7%22N+66%C2%B040'20.1%22E/@40.605202,66.6696661,658m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d40.605202!4d66.672241?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D">MAPS.ME</a> offline
                            map application by
                            searching for “Obi chashma guesthouse & Nurota trip” linked here.</h4>
                        <h4>Whatsapp: +99895 922 75 55 (Whatsapp message link)</h4>
                        <h4>Telegram: +99895 922 75 55</h4>
                        <h4>Phone: <Link target="_blank" rel="noopener noreferrer" to={'tel:+998959227555'}>+99895 922
                            75 55</Link></h4>
                        <h4>Email: <Link target="_blank" rel="noopener noreferrer"
                                         to='mailto:davronn340@gmail.com'>davronn340@gmail.com</Link></h4>
                        <h4>You can make a booking on this website or you can also find us on <a target="_blank"
                                                                                                 rel="noopener noreferrer"
                                                                                                 href="https://www.booking.com/hotel/uz/sentyab-obi-chashma-guest-house.ru.html">Booking.com</a> at
                            this link.
                            Note that on <a target="_blank" rel="noopener noreferrer"
                                            href="https://www.booking.com/hotel/uz/sentyab-obi-chashma-guest-house.ru.html">Booking.com</a> and
                            on some maps Nurata is spelled "Nurota."</h4>
                        <h4>If you need any further information or assistance, please do not hesitate to contact us</h4>
                    </div>

                </div>
            </div>
            <div className="contact-us-footer-bg my-5">
                <div className="row justify-content-center py-3 py-md-5">
                    <div className={'col-12 d-flex justify-content-center col-md-3'}>
                        <Link to='/booking'>
                            <button className={'btn btn-danger'}>
                                Make a Booking
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default ContactUs;