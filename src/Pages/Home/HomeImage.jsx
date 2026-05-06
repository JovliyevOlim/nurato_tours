import React from 'react';
import person from "../../assets/personImage.jpg";

function HomeImage() {
    return (
        <div className="container">
            <div className={'bg-image'}>
                <h1 className={'text-center'}>Nurota tours, Sentob guesthouse and authentic village experiences in
                    Uzbekistan</h1>
                <p className={'text-center'}>
                    Travel from Samarkand, Bukhara or Tashkent to the peaceful villages, mountains, springs and
                    desert landscapes of the Nurota region.
                </p>
                <h2 className={'text-center'}>2026 travel season</h2>
                <p className={'text-start'}>
                    Experiences include village life, bread baking in a tandoor, Uzbek cuisine master classes,
                    traditional music, yurt camping, camel riding, horseback riding, mountain trekking and cultural
                    tours around Sentob, Aydarkul and Nurota.
                </p>
            </div>
            <div className={'d-flex mt-5  justify-content-start align-items-center'}>
                <div className={'col-11 home-person'}>
                    <img className={'home-person-image'} src={person}
                         alt="Host from Nurota Trips welcoming guests in Sentob village"/>
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
