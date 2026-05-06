import React from 'react';
import GorgeImage from "./GorgeImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {tours} from "./gorge.js";
import SeoIntro from "../../Component/SeoIntro.jsx";

function GorgeTour() {
    return (
        <div>
            <GorgeImage/>
            <SeoIntro
                title="Sarmishsoy Gorge petroglyph tour near Nurota"
                description="Sarmishsoy Gorge is one of the strongest cultural day trips near Nurota. This page covers our guided half-day visit to the famous petroglyph valley, a route often combined with Sentob stays and broader Nurata region travel plans."
                places={["Sarmishsoy Gorge", "Petroglyphs", "Nurota", "Navoi Region"]}
                links={[
                    {to: "/info", label: "How to reach Sentob"},
                    {to: "/booking", label: "Book the gorge tour"},
                    {to: "/mountains", label: "Add a mountain trek"}
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

export default GorgeTour;
