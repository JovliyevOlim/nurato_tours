import React from 'react';
import RidingImage from "./RidingImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {tours} from "./riding.js";
import SeoIntro from "../../Component/SeoIntro.jsx";

function RidingTour() {
    return (
        <div>
            <RidingImage/>
            <SeoIntro
                title="Horseback riding to Fozilmon Lake from Sentob"
                description="This horseback riding route connects Sentob village, Fozilmon Lake and Qorgon Tepa through scenic valleys in the Nurota region. It helps travelers searching for riding trips, active day tours and village-based adventures in Uzbekistan."
                places={["Sentob", "Fozilmon Lake", "Qorgon Tepa", "Nurota region"]}
                links={[
                    {to: "/guesthouse", label: "Stay before your ride"},
                    {to: "/booking", label: "Book horseback riding"},
                    {to: "/mountains", label: "See trekking routes"}
                ]}
            />
            <div className='container mt-5'>
                {
                    tours.map((tour, index) =>
                        <CardDesertTour key={index} tour={tour}/>
                    )
                }
            </div>
            <div>
                <h4></h4>
            </div>
        </div>
    );
}

export default RidingTour;
