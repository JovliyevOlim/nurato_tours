import React from 'react';
import img from '../../assets/booking.JPG'

function Booking(props) {
    return (
        <div className='booking container'>
            <div className="row g-5">
                {/* Google Maps */}
                <div className="col-12 col-lg-6">
                    <div className="position-relative h-100">
                        <img src={img} className={'booking-image'} alt="booking"/>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <form>
                        <div className="row g-4 form-group">
                            <div className="col-6">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName"
                                       placeholder="firstName"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName"
                                       placeholder="lastName"/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="tours">Tours</label>
                                <select className="form-control" id="tours">
                                    <option>Desert</option>
                                    <option>Mountain</option>
                                    <option>Lake</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <div className="col-3">
                                <button className={'btn btn-primary'}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Booking;