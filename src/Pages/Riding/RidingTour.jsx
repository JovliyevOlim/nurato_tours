import React from 'react';
import RidingImage from "./RidingImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {tours} from "./riding.js";

function RidingTour(props) {
    return (
        <div>
            <RidingImage/>
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