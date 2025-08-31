import React from 'react';
import GorgeImage from "./GorgeImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {tours} from "./gorge.js";

function GorgeTour(props) {
    return (
        <div>
            <GorgeImage/>
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