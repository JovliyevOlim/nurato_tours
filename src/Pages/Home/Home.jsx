import React from 'react';
import HomeImage from "./HomeImage.jsx";
import ToursMenu from "./ToursMenu.jsx";
import Contact from "./Contact.jsx";

function Home() {
    return (
        <div>
            <HomeImage/>
            <ToursMenu/>
            <Contact className={'contact'}/>
        </div>
    );
}

export default Home;