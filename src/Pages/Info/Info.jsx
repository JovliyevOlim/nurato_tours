import React from 'react';
import InfoImage from "./InfoImage.jsx";
import InfoDetails from "./InfoDetails.jsx";
import Contact from "../Home/Contact.jsx";
import SeoIntro from "../../Component/SeoIntro.jsx";

function Info() {
    return (
        <div>
            <InfoImage/>
            <SeoIntro
                title="Nurota and Sentob travel information"
                description="Use this page if you are planning a trip to Nurota, also spelled Nurata, and need practical details before arriving in Sentob village. It includes transport options from Samarkand, Bukhara and Navoi, seasonal tips, payments and village basics."
                places={["Nurota", "Nurata", "Sentob", "Samarkand", "Bukhara", "Navoi"]}
                links={[
                    {to: "/guesthouse", label: "View the guesthouse"},
                    {to: "/contact", label: "Ask for transport help"},
                    {to: "/booking", label: "Book your trip"}
                ]}
            />
            <InfoDetails/>
            <Contact className={'info-bg'}/>
        </div>
    );
}

export default Info;
