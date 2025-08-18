import React from 'react';
import img1 from '../../assets/guesthouse/guesthouse1.JPG'
import img2 from '../../assets/guesthouse/guesthouse2.JPG'
import img3 from '../../assets/guesthouse/gueshouse3.JPG'
import img4 from '../../assets/guesthouse/guesthouse4.JPG'
import img5 from '../../assets/guesthouse/guesthouse5.JPG'
import GuestHouseText from "./GuestHouseText.jsx";
import {Link} from "react-router-dom";


function GuestHouse(props) {
    return (
        <div className="guesthouse container">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <img className={'img-6'} src={img3} alt="img1"/>
                </div>
                <div className="col-12 col-md-6">
                    <img className={'img-6'} src={img2} alt="img2"/>
                </div>
            </div>
            <div className="row mt-2 g-4">
                <div className="col-12 col-md-4">
                    <img className={'img-4'} src={img4} alt="img1"/>
                </div>
                <div className="col-12 col-md-4">
                    <img className={'img-4'} src={img5} alt="img2"/>
                </div>
                <div className="col-12 col-md-4">
                    <img className={'img-4'} src={img1} alt="img2"/>
                </div>
            </div>
            <h3 className={'my-5'}>Below is a list of frequently asked questions about visiting Sentob Village. If you
                still have
                questions, please contact us.</h3>
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