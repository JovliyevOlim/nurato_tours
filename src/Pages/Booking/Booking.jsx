import React, {useEffect, useState} from 'react';
import img from '../../assets/booking.JPG'

const baseUrl = "https://nurotatrips.com/api"

function Booking(props) {

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        tourId: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!form.firstName.trim()) newErrors.firstName = "First name is required";
        if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!form.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!/^[0-9]{7,15}$/.test(form.phoneNumber)) {
            newErrors.phoneNumber = "Enter a valid phone number (7-15 digits)";
        }

        if (!form.tourId) newErrors.tourId = "Please select a tour";
        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.id]: e.target.value});
        validate()
    };

    const handleBlur = (e) => {
        validate()
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                const response = await fetch(`${baseUrl}/clients`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form)
                });
                if (!response.ok) {
                    throw new Error("Xatolik: " + response.status);
                }
                setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    tourId: "",
                    message: ""
                });
                setLoading(false);
                setSuccess(true);
            } catch (error) {
                alert(error.message);
                setLoading(false);
                setSuccess(false);
            }
        }
    };

    useEffect(() => {
        fetch(`${baseUrl}/tours`, {
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa("admin:admin123"),
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Xatolik: " + response.status);
                }
                return response.json(); // JSON ga o‘tkazamiz
            })
            .then(data => {
                setTours(data);
            })
            .catch(error => {
                console.error("Xatolik yuz berdi:", error);
            });
    }, [])


    return (
        <div className='booking container'>

            <div className="row g-0 g-md-5">
                {/* Google Maps */}
                <div className="col-12 col-lg-6">
                    <div className="position-relative h-100">
                        <img src={img} className={'booking-image'} alt="booking"/>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    {
                        success ? <div className={'h-100  d-flex justify-content-center align-items-center'}>
                                <h3 className={'w-75'}>Thank you! Your application has been successfully submitted. Our team
                                    will reach out to
                                    you soon.</h3>
                            </div> :
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4 form-group">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder={'Enter First Name'}
                                            value={form.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder={'Enter Last Name'}
                                            value={form.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}

                                        />
                                        {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder={'Enter Email'}
                                            value={form.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}

                                        />
                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phoneNumber"
                                            value={form.phoneNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder={'Enter Phone Number'}
                                        />
                                        {errors.phoneNumber &&
                                            <small className="text-danger">{errors.phoneNumber}</small>}
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="tours">Tours</label>
                                        <select
                                            className="form-control"
                                            id="tourId"
                                            value={form.tourId}
                                            onChange={handleChange}
                                            onBlur={handleBlur}

                                        >
                                            <option value="">Select a tour</option>
                                            {tours.map((tour) => (
                                                <option key={tour.id} value={tour.id}>
                                                    {tour.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.tourId && <small className="text-danger">{errors.tourId}</small>}
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows="3"
                                            value={form.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder={'Enter Message'}
                                        ></textarea>
                                        {errors.message && <small className="text-danger">{errors.message}</small>}
                                    </div>

                                    <div className="col-3">
                                        <button type="submit" disabled={loading}
                                                className="btn btn-primary d-flex gap-2 align-items-center">
                                            Submit
                                            {
                                                loading &&
                                                <span className="spinner-border spinner-border-sm"></span>
                                            }

                                        </button>
                                    </div>
                                </div>
                            </form>

                    }
                </div>
            </div>
        </div>
    );
}

export default Booking;