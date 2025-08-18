import React from 'react';
import person from "../../assets/personImage.jpg";

function HomeImage(props) {
    return (
        <div className="container">
            <div className={'bg-image'}>
                <h2 className={'text-center'}>From big and noisy cities to quiet and peaceful villages
                    From Samarkand, Bukhara and Tashkent
                    Life and experience of the historical and monumental villages of Nurota.</h2>
                <h2 className={'text-center'}>2025/2026</h2>
                <h2 className={'text-start'}>Experiences:</h2>
                <h2 className={'text-start'}>“Village life”, “Bread baking in a tandoor”, “National cuisine master
                    class”,
                    “National musical
                    instrument master”, “Yurt camping”, “Uzbek desert”, “Camel riding”, “Horse riding”, “Cultural
                    trekking
                    and tourism in Nurota”.</h2>
            </div>
            <div className={'d-flex mt-5  justify-content-start align-items-center'}>
                <div className={'col-11 home-person'}>
                    <img className={'home-person-image'} src={person} alt="person"/>
                    <h2>
                        "Nurota is a unique corner in the heart of Uzbekistan. A land where mountains and deserts,
                        springs and ancient monuments come together in harmony. People of different ethnic backgrounds
                        live here in friendship, and the local hospitality is truly special. The annual festivals and
                        traditions make Nurota even more exceptional. It is a miracle embraced by nature and history."
                    </h2>
                </div>
            </div>
            <div className={'d-flex mt-5 justify-content-center align-items-center'}>
                <div className={'col-12 home-person'}>
                    <h3>
                        Hello! My name is Nasir, and I warmly invite you to experience true Uzbek hospitality in my
                        hometown — the charming mountain village of Sentob, nestled in the heart of the Nurota region.

                        Just a 1.5–2 hour scenic walk from Nurota, Sentob lies in the embrace of the majestic Nurota
                        Mountains, surrounded by the breathtaking nature of the Nurota-Kyzylkum Biosphere Reserve — a
                        unique mix of lakes, steppes, and desert landscapes.

                        With 13 years of experience in tourism, I speak English and Russian, and I’m passionate about
                        sharing the culture, traditions, and natural beauty of my homeland.

                        Stay with my family, explore untouched trails, taste local cuisine, and immerse yourself in
                        the peaceful rhythm of rural Uzbek life.
                    </h3>
                </div>
            </div>
        </div>

    );
}

export default HomeImage;