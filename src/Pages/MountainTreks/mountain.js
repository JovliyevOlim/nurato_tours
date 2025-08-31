import mountain2 from "../../assets/mountainTours/mountain1_1.jpg"
import mountain21 from "../../assets/mountainTours/mountain1_2.jpg"
import mountain22 from "../../assets/mountainTours/mountain1_3.jpg"
import hidden1 from "../../assets/mountainTours/hidden1.jpg"
import hidden2 from "../../assets/mountainTours/hidden2.jpg"
import hidden3 from "../../assets/mountainTours/hidden3.jpg"
import village1 from "../../assets/mountainTours/village1.JPG"
import village2 from "../../assets/mountainTours/village2.JPG"
import village3 from "../../assets/mountainTours/village3.JPG"

export const mountains = [
    {
        name: "Mountain and Lake Combined Tour",
        plan: "(Full-Day Tour)",
        text: "After a warm welcome and lunch at the Obi Chashma Hotel, our tour begins at approximately 2:00 PM.\n" +
            "This amazing experience allows you to step back in time and explore the remains of a bygone era dating back to the time of Alexander the Great. As you travel through the desert, you will find yourself staying in traditional houses that give a unique look at the nomadic lifestyle of the region. Of course, you can also take a dip in the clear waters of the lake.",
        text1: "During your tour, immerse yourself in the quiet beauty and timeless rhythm of the desert. Enjoy a leisurely stroll along Lake Aydarkul and visit Lake Aydarkul, whose calm waters contrast wonderfully with the arid desert surrounding it. After a wonderful trip, we will have a pleasant rest after dinner at the hotel, after breakfast in the morning at 8:00 AM we will continue our journey towards the mountain, passing through the village and visiting the ancient monuments of the fortress.\n" +
            "Embark on an invigorating journey along clearly marked paths that reveal the breathtaking beauty of the Sentob village and the Nurotau mountains.",
        hour: "Learn about the rich history of Sentob by visiting the remains of an ancient fortress, mosques and architectural wonders\n" +
            "Interact with friendly villagers who are eager to share stories, customs and traditions. You can end our journey at 12:00 PM and continue your journey again after lunch.",
        price: [
            {
                name: "Costs for the tour:",
                list: ['Single person – $80',
                    'Two people – $150 ($75 per person)',
                    'Three people – $210 ($70 per person)',
                    'Four or more people – price upon request'],
            },
        ],
        priceIncludes: [
            "Nurota-Sentob-30$",
            "Navoiy-Sentob-40$",
            "Buxoro-Sentob-70$",
            "Samarqand-Sentob-45$",
            "Jizzax-Sentob-35$"
        ],
        priceIncludesText: "The Aydarkul and Qo'rg'ontepa tour includes a driver, guide, homestay accommodation and all meals.",
        additional: [],
        images: [
            mountain2, mountain21, mountain22
        ]
    },
    {
        name: "Hidden Trails Tour (“Sob to Sentob”)",
        plan: "(Full-Day Tour)",
        text: "This scenic hike takes you from Sob village to Sentob village, crossing through the beautiful Nuratau Mountain range. Along the way, you’ll explore the picturesque Kadvan Valley, see ancient stone houses, and experience the daily life and warm hospitality of remote mountain communities.",
        hour: "A traditional lunch with a local village family is included in the price, giving you a true taste of rural Uzbek culture.",
        price: [
            {
                name: "Costs for the tour:",
                list: ['Single person – $50',
                    'Two people – $85 ($42.5 per person)',
                    'Three people – $99 ( $33 per person)',
                    'Four or more people – Price available upon request'],
            },
        ],
        additional: [],
        images: [
            hidden1, hidden2, hidden3
        ]
    },
    {
        name: "Village-to-Village Trekking in the Nuratau Mountains",
        plan: "(Available as 2, 3, or 4-day options)",
        text: "Looking to immerse yourself in both nature and culture? This unique trek through the Nuratau mountain range offers a perfect blend of scenic landscapes, traditional stone villages, and warm hospitality.",
        text1: "Each night, you will stay in a local homestay, where you’ll be served breakfast, lunch, and dinner. All you need to bring is clothing and footwear suitable for mountain walking",
        hour: "Depending on the number of days you choose, you will visit the villages of Sob, Sentob, Mojrum, Uhum. \n" +
            "Transport is provided between the villages, allowing you to enjoy each destination without the strain of long hikes. You'll have time to explore, meet local people, and experience the rhythm of village life.",
        price: [
            {
                name: "2 days / 1 night:",
                list: ['One person - $95',
                    'Two people - $165',
                    'Three people - $220',
                    'For four or more people – price upon request'],
            },
            {
                name: "3 days / 2 nights:",
                list: ['One person - $135',
                    'Two people - $255',
                    'Three people - $355',
                    'For four or more people – price upon request'],
            },
        ],
        priceIncludesText: "The price includes:",
        priceIncludes: ['Transportation between villages',
            'English or local-speaking guide',
            'All meals during the trek',
            'Accommodation in homestays',],
        additional: ['The tour starts and ends in Sentob. For an extra fee, you can start or end the trip in Bukhara or Samarkand.', 'For more information or to make a reservation, feel free to contact us!'],
        images: [
            village1, village2, village3,
        ]
    }
]