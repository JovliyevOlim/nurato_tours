import React from 'react';
import MountainImage from "./MountainImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {mountains} from "./mountain.js";
import MountainFooter from "./MountainFooter.jsx";
import SeoIntro from "../../Component/SeoIntro.jsx";

function MountainTreks() {
    return (
        <div>
            <MountainImage/>
            <SeoIntro
                title="Nuratau mountain treks from Sentob and Nurota"
                description="Our mountain routes focus on village-to-village trekking across the Nuratau Mountains with stops in Sentob, Sob, Mojrum and Uhum. These tours are ideal for travelers searching for Nurota hiking, cultural walking and local mountain homestays."
                places={["Sentob", "Sob", "Mojrum", "Uhum", "Fozilmon Lake", "Nuratau Mountains"]}
                links={[
                    {to: "/guesthouse", label: "Guesthouse in Sentob"},
                    {to: "/booking", label: "Book a mountain trek"},
                    {to: "/desert", label: "See desert routes"}
                ]}
            />
            <div className='container mt-5'>
                {
                    mountains.map((tour, index) =>
                        <CardDesertTour key={index} tour={tour}/>
                    )
                }
            </div>
            <MountainFooter/>
        </div>
    );
}

export default MountainTreks;
