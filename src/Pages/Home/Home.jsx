import React from 'react';
import Header from "../Header.jsx";
import HomeImage from "./HomeImage.jsx";
import ToursMenu from "./ToursMenu.jsx";
import Contact from "./Contact.jsx";
import Footer from "../Footer.jsx";

function Home(props) {
    return (
        <div>
            <HomeImage/>
            <ToursMenu/>
            <Contact className={'contact'}/>
        </div>
    );
}

export default Home;