import React from 'react';
import MountainImage from "./MountainImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {mountains} from "./mountain.js";
import MountainFooter from "./MountainFooter.jsx";

function MountainTreks(props) {
    return (
        <div>
            <MountainImage/>
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