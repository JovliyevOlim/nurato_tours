import Home from "./Pages/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Header from "./Pages/Header.jsx";
import Footer from "./Pages/Footer.jsx";
import DesertTour from "./Pages/DesertTour/DesertTour.jsx";
import MountainTreks from "./Pages/MountainTreks/MountainTreks.jsx";
import Info from "./Pages/Info/Info.jsx";
import GuestHouse from "./Pages/GuestHouse/GuestHouse.jsx";
import ContactUs from "./Pages/Contact/Contact.jsx";
import Booking from "./Pages/Booking/Booking.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";

function App() {

    return (
        <div>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/desert-tour" element={<DesertTour/>}/>
                <Route path="/mountain-treks" element={<MountainTreks/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/guesthouse" element={<GuestHouse/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/booking" element={<Booking/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
