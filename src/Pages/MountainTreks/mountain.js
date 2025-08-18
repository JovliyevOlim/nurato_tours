import tour1 from "../../assets/desertTours/desertTour1_1.JPG";
import tour12 from "../../assets/desertTours/desertTour1_2.JPG";
import tour13 from "../../assets/desertTours/desertTour1_3.JPG";
import mountain2 from "../../assets/mountainTours/mountain1_1.jpg"
import mountain21 from "../../assets/mountainTours/mountain1_2.jpg"
import mountain22 from "../../assets/mountainTours/mountain1_3.jpg"
import tour31 from "../../assets/desertTours/desertTour3_1.JPG"
import tour32 from "../../assets/desertTours/desertTour3_2.JPG"
import tour33 from "../../assets/desertTours/desertTour3_3.JPG"

export const mountains = [
    {
        name: "Beautiful Landscapes of Aydarkul and Kyzylkum",
        plan: "(Full-Day Tour)",
        text: "On this tour, you will have the opportunity to explore the vast Kyzylkum Desert and the tranquil Aydarkul Lake. During the tour, the following activities will take place:\n" +
            " • Walking through the unique desert landscape\n" +
            " • Swimming in the clean waters of the lake\n" +
            " • Scenic drive across the expansive steppe\n" +
            " • Walking in the wetlands and bird watching\n" +
            " • Visiting a Kazakh nomad village\n" +
            " • Several stops for photographing sheep, goats, horses, and other wildlife",
        hour: "The tour usually starts at 9:00 AM from the guesthouse and ends around 3:00 or 4:00 PM.",
        price: [
            'Single person – $40',
            'Two people – $60 ($30 per person)',
            'Three people – $75 ($25 per person)',
            'Four or more people – price upon request'
        ],
        additional: 'Camel riding (10 km) – $20 per person (extra charge) A picnic can be organized at a location of your choice during the tour. The tour price includes transportation and picnic.',
        images: [
            tour1, tour12, tour13
        ]
    },
    {
        name: "Hidden Trails Tour (“Sob to Sentob”)",
        plan: "(Full-Day Tour)",
        text: "This scenic hike takes you from Sob village to Sentob village, crossing through the beautiful Nuratau Mountain range. Along the way, you’ll explore the picturesque Kadvan Valley, see ancient stone houses, and experience the daily life and warm hospitality of remote mountain communities.",
        hour: "A traditional lunch with a local village family is included in the price, giving you a true taste of rural Uzbek culture.",
        price: [
            'Single person – $50',
            'Two people – $85 ($42.5 per person)',
            'Three people – $99 ( $33 per person)',
            'Four or more people – Price available upon request'
        ],
        additional: "",
        images: [
            mountain2, mountain21, mountain22
        ]
    },
    {
        name: "Village-to-Village Trekking in the Nuratau Mountains",
        plan: "(Available as 2, 3, or 4-day options)",
        text: "Looking to immerse yourself in both nature and culture? This unique trek through the Nuratau mountain range offers a perfect blend of scenic landscapes, traditional stone villages, and warm hospitality." +
            "Depending on the number of days you choose, you will visit the villages of Sob, Sentob, Mojrum, Uhum. \n" +
            "Transport is provided between the villages, allowing you to enjoy each destination without the strain of long hikes. You'll have time to explore, meet local people, and experience the rhythm of village life.",
        hour: "Each night, you will stay in a local homestay, where you’ll be served breakfast, lunch, and dinner. All you need to bring is clothing and footwear suitable for mountain walking",
        price: [
            'One person - $75',
            'Two people - $130 ($65 per person)',
            'Three people - $165 ($55 per person)',
            'Prices for four or more people are available upon request'
        ],
        additional: "The camping trip includes transportation, lunch on the first day (lunch at the guesthouse), dinner, breakfast, and equipment including a tent, mattress, blanket, and drinking water.",
        images: [
            tour31, tour32, tour33
        ]
    }
]