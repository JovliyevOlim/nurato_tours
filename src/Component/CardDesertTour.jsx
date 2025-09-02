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
                    {
                        tour?.listTexts &&
                        tour?.listTexts.length > 0 &&
                        <div>
                            <h5>{tour?.listText}</h5>
                            <ul>
                                {
                                    tour?.listTexts.map((item, index) =>
                                        <li key={index}>{item}</li>)
                                }
                            </ul>
                        </div>
                    }
                    <h5>{tour?.text1}</h5>
                    <h5>{tour?.text2}</h5>
                    <h5>{tour?.hour}</h5>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    {

                        tour?.price.map((item, index) =>
                            <div key={index}>
                                <h5>{item?.name}</h5>
                                <ul>
                                    {
                                        item?.list.map((item2, index) =>
                                            <li key={index}>{item2}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        )

                    }
                    {
                        tour?.priceIncludes &&
                        tour?.priceIncludes.length > 0 &&
                        <div>
                            <h5>{tour?.priceIncludesText}</h5>
                            <ul>
                                {
                                    tour?.priceIncludes.map((item, index) =>
                                        <li key={index}>{item}</li>)
                                }
                            </ul>
                        </div>
                    }
                    {
                        tour?.additional?.map((item, index) =>
                            <h5 key={index}>{item}</h5>
                        )
                    }
                </div>

            </div>
            <div className="row g-5 mt-4">
                {
                    tour?.images.map((item, index) =>
                        <div key={index} className="col-12 col-md-4">
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