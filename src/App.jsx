import {Route, Routes} from "react-router-dom";
import Header from "./Pages/Header.jsx";
import Footer from "./Pages/Footer.jsx";
import {lazy} from "react";
import AppLayout from "./Component/AppLayout.jsx";


// Lazy imports
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const DesertTour = lazy(() => import("./Pages/DesertTour/DesertTour.jsx"));
const MountainTreks = lazy(() => import("./Pages/MountainTreks/MountainTreks.jsx"));
const Info = lazy(() => import("./Pages/Info/Info.jsx"));
const GuestHouse = lazy(() => import("./Pages/GuestHouse/GuestHouse.jsx"));
const ContactUs = lazy(() => import("./Pages/Contact/Contact.jsx"));
const Booking = lazy(() => import("./Pages/Booking/Booking.jsx"));
const RidingTour = lazy(() => import("./Pages/Riding/RidingTour.jsx"));
const GorgeTour = lazy(() => import("./Pages/Gorge/GorgeTour.jsx"));

function App() {

    return (
        <div>
            <Header/>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/desert" element={<DesertTour/>}/>
                    <Route path="/mountains" element={<MountainTreks/>}/>
                    <Route path="/gorge" element={<GorgeTour/>}/>
                    <Route path="/riding" element={<RidingTour/>}/>
                    {/*<Route path="/scenic" element={<MountainTreks/>}/>*/}
                    <Route path="/info" element={<Info/>}/>
                    <Route path="/guesthouse" element={<GuestHouse/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
                    <Route path="/booking" element={<Booking/>}/>
                </Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
