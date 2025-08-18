import React from 'react';
import {Link} from "react-router-dom";

function Contact({className}) {
    return (
        <div className={className}>
            <Link to={'/contact'}>
                <h2 className={'text-center'}>Contact Us</h2>
            </Link>
        </div>
    );
}

export default Contact;