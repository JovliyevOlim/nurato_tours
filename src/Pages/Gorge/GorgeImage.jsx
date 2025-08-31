import React from 'react';
import {Link} from "react-router-dom";

function GorgeImage(props) {
    return (
        <div className="gorge">
            <div className="gorge-image">
                <h2>Step into the gorge, where ancient rivers carved their story into towering cliffs.</h2>
                <Link to="/booking">
                    <button className={'btn btn-danger'}>Book Now</button>
                </Link>
            </div>
        </div>
    );
}

export default GorgeImage;