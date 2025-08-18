import React from 'react';
import InfoImage from "./InfoImage.jsx";
import InfoDetails from "./InfoDetails.jsx";
import Contact from "../Home/Contact.jsx";

function Info(props) {
    return (
        <div>
            <InfoImage/>
            <InfoDetails/>
            <Contact className={'info-bg'}/>
        </div>
    );
}

export default Info;