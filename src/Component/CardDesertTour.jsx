import React from 'react';
import img from '../assets/desertTours/desertTour1_1.JPG';

function CardDesertTour({tour}) {
    return (
        <div className={'card-desert-tour mt-4'}>
            <div className="row g-5">
                <div className="col-12 col-md-4  col-lg-4">
                    <h3>{tour?.name}</h3>
                    <h3>{tour?.plan}</h3>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <h5>{tour?.text}</h5>
                    <h5>{tour?.hour}</h5>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <h5>Costs for the tour:</h5>
                    <ul>
                        {
                            tour?.price.map((item, index) =>
                                <li key={index}>{item}</li>)
                        }
                    </ul>
                    <h5>{tour.additional}</h5>
                </div>
            </div>
            <div className="row g-5 mt-4">
                {
                    tour.images.map((item, index) =>
                        <div className="col-12 col-md-4">
                            <img loading="lazy" src={item} alt={index}/>
                        </div>
                    )
                }

            </div>
            <hr className={'text-dark my-4 text-opacity-100'}/>
        </div>
    );
}

export default CardDesertTour;