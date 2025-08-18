import React from 'react';
import {Link} from "react-router-dom";

function DesertImage(props) {
    return (
        <div className="desert">
            <div className="desert-image">
                <h2>Travel through nature’s trio: steppe, desert, and lake</h2>
                <Link to="/booking">
                    <button className={'btn btn-danger'}>Book Now</button>
                </Link>
            </div>
        </div>
    );
}

export default DesertImage;