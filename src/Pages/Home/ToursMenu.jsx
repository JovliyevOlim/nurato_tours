import React from 'react';
import CardTours from "../../Component/CardTours.jsx";
import tour1 from "../../assets/tours/tour1.JPG"
import tour2 from "../../assets/tours/tour2.jpg"
import tour3 from "../../assets/tours/tour3.JPG"
import {Link} from "react-router-dom";

const tours = [
    {
        img: tour1,
        path: 'guesthouse',
        title: 'Guesthouse',
        text: "My family guesthouse is located in Sentob village, nestled in the heart of the Nurota Mountains. This beautiful and historic place serves as the starting point for all of our tours and adventures."
    },
    {
        img: tour3,
        path: 'info',
        title: 'Information',
        text: "Nurato Trips and Obi Chashma Guesthouse is a family-run business, offering authentic experiences in the Nurota region.\n" +
            "Click the link below to learn more about Nurata and Sentob, including travel tips, transportation options, and other useful information for planning your visit."
    },
]

function ToursMenu(props) {
    return (
        <div className={'container'}>
            <div className={'row gx-0 g-5 mt-5'}>
                <div className={'col-12  col-md-4'}>
                    <div className={'card-tour'}>
                        <img src={tour2} alt="img"/>
                        <div className={'d-flex align-items-center gap-2 justify-content-center py-3'}>
                            <Link to={'/desert'}>
                                <p className={'p-0 m-0'}>
                                    Desert</p>
                            </Link>
                            and
                            <Link to={'/mountain'}>
                                <p className={'p-0 m-0'}>
                                    Mountain Tours
                                </p>
                            </Link>
                        </div>


                        <h4>
                            We offer a variety of unforgettable tours — from half-day and full-day trips to multi-day
                            adventures.
                            From Nurata, you can enjoy mountain hikes, camping by serene lakes, camel rides in the
                            desert and horse riding in the mountains, overnight stays in traditional yurts, authentic
                            village experiences, and so much more!'
                        </h4>
                    </div>
                </div>
                {
                    tours.map((tour, index) =>
                        <div key={index} className={'col-12  col-md-4'}>
                            <CardTours img={tour.img} path={tour.path} title={tour.title} text={tour.text}/>
                        </div>
                    )
                }

            </div>
        </div>

    );
}

export default ToursMenu;