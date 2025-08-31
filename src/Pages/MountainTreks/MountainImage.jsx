import React from 'react';
import {Link} from "react-router-dom";

function MountainImage(props) {
    return (
        <div className="mountain">
            <div className="mountain-image">
                <h2>Beyond the trails: a mountain journey</h2>
                <Link to="/booking">
                    <button className={'btn btn-danger'}>Book Now</button>
                </Link>
            </div>
        </div>
    );
}

export default MountainImage;