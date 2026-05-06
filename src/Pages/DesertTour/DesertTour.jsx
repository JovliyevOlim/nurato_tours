import React from 'react';
import DesertImage from "./DesertImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {tours} from "./tours.js";
import SeoIntro from "../../Component/SeoIntro.jsx";

function DesertTour() {
    return (
        <div>
            <DesertImage/>
            <SeoIntro
                title="Aydarkul Lake and Kyzylkum Desert tours from Nurota"
                description="These desert tours start from Sentob village and connect travelers with Aydarkul Lake, the Kyzylkum Desert, yurt camps and lakeside camping. They work well for guests looking for a Nurota base with both nature and local culture."
                places={["Aydarkul Lake", "Kyzylkum Desert", "Sentob", "Kazakh nomad village"]}
                links={[
                    {to: "/guesthouse", label: "Stay in Sentob guesthouse"},
                    {to: "/booking", label: "Book a desert tour"},
                    {to: "/info", label: "Travel info for Nurota"}
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

export default DesertTour;
