import React from 'react';
import DesertImage from "./DesertImage.jsx";
import CardDesertTour from "../../Component/CardDesertTour.jsx";
import {tours} from "./tours.js";

function DesertTour(props) {
    return (
        <div>
            <DesertImage/>
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