import React from 'react';
import {Link} from "react-router-dom";

const list = [
    {
        title: 'Obi Chashma Guest House – An Amazing Stay in the Heart of Sentob Village',
        text: 'Obi Chashma Guest House is located right in the center of Sentob village, a unique place rich with nature and history in the Navoi region. Our guest house has been welcoming guests since 2010, offering an authentic Uzbek hospitality experience to local and international visitors alike.',
        additional: []
    },
    {
        title: 'What Makes Us Different?',
        text: "Our guest house is family-run, creating a warm and welcoming atmosphere:",
        additional: ['Home-cooked meals prepared in a traditional Uzbek style using our own farm-grown ingredients.', 'Strict cleanliness and hygiene standards.', 'Various master classes available', 'Traditional bread baking',
            'Cooking local dishes',
            'Music lessons',
            'Participation in farming and animal husbandry activities',
            'Traditional handicrafts – especially ethnic embroidery (“so‘zani”) created by the women of our house, who can also teach you this art.']
    },
    {
        title: 'About Our Guest House',
        text: 'Our guest house is built in an authentic traditional architectural style, featuring a spacious courtyard and a peaceful environment. We also organize 3-4 day tours around Sentob and its surroundings, which offer many beautiful and interesting places to explore.',
        additional: [],
    },
    {
        title: 'Location and Nearby Attractions',
        text: 'We are located 120 km from the city of Nurota. From our guest house, the following important sites are within walking distance:',
        additional: ['Sacred springs (“chashma”)', 'Fozilmon mountain and lake', 'Qo‘rg‘on fortress', 'Mojrum juniper tree – dating back to the time of Alexander the Great', 'Historic mosques from the 17th and 18th centuries', 'Ancient petroglyphs spanning various centuries']
    },
    {
        title: "Dining and Special Services",
        text: '',
        additional: ['Free breakfast every morning made from fresh local products.',
            'Lunch and dinner available for $6 per person.',
            'Vegetarian and vegan dishes available on request.',
            'Fresh vegetables and dairy products from our own farm.',
            'Homemade preserves, pickled cucumbers, and sweets.']
    },
    {
        title: "Additional Services:",
        text: '',
        additional: ['Horse and donkey rental for exploring the mountains, pastures, and nearby villages',
            'Handicraft workshops: embroidery, bread baking, cooking master classes.',
            'Opportunities to participate in farming and animal husbandry for a genuine rural experience.']
    },
    {
        title: "Transportation and Arrival",
        text: 'If you are coming from Bukhara, Samarkand, or other cities, we provide information about transportation options to our guest house. Please visit our information page for details.',
        additional: []
    }
]


function GuestHouseText(props) {
    return (
        <div className={'row g-4 mb-5 justify-content-center guestHouse-text'}>
            {
                list.map((item, index) =>
                    <div key={index} className="col-11 col-md-8">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                        <div className={'guestHouse-text-item'}>
                            <ul type={'circle'}>
                                {
                                    item?.additional.map((item2, index2) =>
                                        <li key={index2}>{item2}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
            <div className="col-11 col-md-8">
                <h5>How to Book & Contact Us</h5>
                <p>You can easily find and book our guest house through <a target="_blank" rel="noopener noreferrer"
                                                                           href='https://www.booking.com/hotel/uz/sentyab-obi-chashma-guest-house.ru.html'>Booking.com</a> using
                    the link below:</p>
                <p><a target="_blank" rel="noopener noreferrer" className="text-break"
                      href='https://www.booking.com/hotel/uz/sentyab-obi-chashma-guest-house.ru.html'>https://www.booking.com/hotel/uz/sentyab-obi-chashma-guest-house.ru.html</a>
                </p>
                <p>For more information, inquiries, or assistance with your reservation, please visit our website or
                    contact us directly via the same <a target="_blank" rel="noopener noreferrer"
                                                        href='https://www.booking.com/hotel/uz/sentyab-obi-chashma-guest-house.ru.html'>Booking.com</a> page.
                </p>
                <p>We look forward to welcoming you and making your stay unforgettable!</p>
            </div>
            <div className="col-11 col-md-8">
                <h5>Come and See for Yourself!</h5>
                <p>As the Uzbek proverb says:
                    “Seeing once is better than hearing a thousand times.”
                    Sentob offers unforgettable views, ancient history, warm hospitality, and peaceful nature. Staying
                    at Obi Chashma Guest House is not just a trip — it’s a true life experience!</p>
            </div>

        </div>
    );
}

export default GuestHouseText;