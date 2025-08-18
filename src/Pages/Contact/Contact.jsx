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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95821.74849352763!2d69.1815609!3d41.3110815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9fa4e4aaab%3A0x66c7f2b6a7b13412!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1720161889553!5m2!1sen!2s"
                                frameBorder="0"
                                style={{minHeight: '450px', border: 0}}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Google Map - Tashkent"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-12 col-lg-6">
                        <h4>Address: Sentob village house #102</h4>
                        <h4>Nurata, Uzbekistan</h4>
                        <h4>You can also find us using the offline map app MAPS.ME by searching "Guesthouse Ruslan
                            Nurata & Tours," as linked here.</h4>
                        <h4>Telephone: +998956072027</h4>
                        <h4>Email: ruslan.nuratau@mail.ru</h4>
                        <h4>You can make a booking on this website or you can also find us on Booking.com at this link.
                            Note that on Booking.com and on some maps Nurata is spelled "Nurota."</h4>
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