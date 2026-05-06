import React from 'react';
import img1 from '../../assets/guesthouse/guesthouse1.JPG'
import img2 from '../../assets/guesthouse/guesthouse2.JPG'
import img3 from '../../assets/guesthouse/gueshouse3.JPG'
import img4 from '../../assets/guesthouse/guesthouse4.JPG'
import img5 from '../../assets/guesthouse/guesthouse5.JPG'
import GuestHouseText from "./GuestHouseText.jsx";
import {Link} from "react-router-dom";
import SeoIntro from "../../Component/SeoIntro.jsx";


function GuestHouse() {
    return (
        <div className="guesthouse container">
            <SeoIntro
                title="Obi Chashma Guest House in Sentob, Nurota region"
                description="Obi Chashma Guest House is our family-run base in Sentob village for travelers looking for an authentic stay in the Nurota region. It works well for guests visiting Aydarkul, the Kyzylkum Desert, Fozilmon, Sarmishsoy and the Nuratau Mountains."
                places={["Sentob village", "Nurota region", "Fozilmon", "Mojrum", "Aydarkul", "Sarmishsoy"]}
                links={[
                    {to: "/info", label: "How to get here"},
                    {to: "/booking", label: "Book your stay"},
                    {to: "/contact", label: "Contact the host"}
                ]}
            />
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <img className={'img-6'} src={img3} alt="Traditional courtyard at Obi Chashma Guest House in Sentob"/>
                </div>
                <div className="col-12 col-md-6">
                    <img className={'img-6'} src={img2} alt="Guest room at Obi Chashma Guest House in Sentob village"/>
                </div>
            </div>
            <div className="row mt-2 g-4">
                <div className="col-12 col-md-4">
                    <img className={'img-4'} src={img4} alt="Family guesthouse building in Sentob near Nurota"/>
                </div>
                <div className="col-12 col-md-4">
                    <img className={'img-4'} src={img5} alt="Dining and courtyard area at Obi Chashma Guest House"/>
                </div>
                <div className="col-12 col-md-4">
                    <img className={'img-4'} src={img1} alt="Local hospitality at Obi Chashma Guest House in Sentob"/>
                </div>
            </div>
            <h2 className={'my-5'}>Below is a list of frequently asked questions about visiting Sentob Village. If you
                still have
                questions, please contact us.</h2>
            <GuestHouseText/>
            <div className="row justify-content-center py-3 py-md-5">
                <div className={'col-12 d-flex justify-content-center col-md-3'}>
                    <Link to='/booking'>
                        <button className={'btn btn-danger'}>
                            Make a Booking
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default GuestHouse;
