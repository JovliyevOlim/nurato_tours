import React from 'react';
import HomeImage from "./HomeImage.jsx";
import ToursMenu from "./ToursMenu.jsx";
import Contact from "./Contact.jsx";
import Seo from "../../Component/Seo.jsx";

function Home() {
    return (
        <div>
            <Seo
                title="Nurato Trips — Tours & Trips in Uzbekistan"
                description="Best tours and trips in Uzbekistan. Discover Tashkent, Samarkand, Bukhara, and more."
                keywords="Uzbekistan tours, trip, tour, travel, Tashkent trip, Samarkand tour"
                canonical="https://nurotatrips.com"
            />
            <HomeImage/>
            <ToursMenu/>
            <Contact className={'contact'}/>
        </div>
    );
}

export default Home;