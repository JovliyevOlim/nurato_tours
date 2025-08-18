import React from 'react';
import {Link} from "react-router-dom";

function CardTours({img, title, text, path}) {
    return (
        <div className={'card-tour'}>
            <img src={img} alt="img"/>
            <div className={'d-flex align-items-center justify-content-center py-3'}>

                <Link to={path}>
                    <p className={'p-0 m-0'}>
                        {title}
                    </p>
                </Link>
            </div>
            <h4>
                {text}
            </h4>
        </div>
    );
}

export default CardTours;