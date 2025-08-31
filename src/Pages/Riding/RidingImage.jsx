import React from 'react';
import {Link} from "react-router-dom";

function DesertImage(props) {
    return (
        <div className="horse">
            <div className="horse-image">
                <h2>Discover freedom on horseback: across meadows, through valleys, and along timeless mountain
                    paths.</h2>
                <Link to="/booking">
                    <button className={'btn btn-danger'}>Book Now</button>
                </Link>
            </div>
        </div>
    );
}

export default DesertImage;