import tour1 from "../../assets/desertTours/desertTour1_1.JPG";
import tour12 from "../../assets/desertTours/desertTour1_2.JPG";
import tour13 from "../../assets/desertTours/desertTour1_3.JPG";
import tour2 from "../../assets/desertTours/desertTour2_1.JPG"
import tour21 from "../../assets/desertTours/desertTour2_2.JPG"
import tour22 from "../../assets/desertTours/desertTour2_3.JPG"
import tour31 from "../../assets/desertTours/desertTour3_1.JPG"
import tour32 from "../../assets/desertTours/desertTour3_2.JPG"
import tour33 from "../../assets/desertTours/desertTour3_3.JPG"

export const tours = [
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
        name: "Yurt Camping Adventure",
        plan: "(Overnight in the Kyzylkum Desert)",
        text: "Spend a night under the stars in a traditional yurt deep in the heart of the Kyzylkum Desert, beyond the vast steppes. This overnight tour offers a unique glimpse into nomadic life and untouched desert landscapes.\n" +
            "\n" +
            "We typically depart in the early afternoon (around 1–2 PM) and head towards the yurt camp. Along the way, we’ll stop at a Kazakh village nestled in the desert and, time permitting, enjoy some optional activities by Aydarkul Lake.\n" +
            "\n" +
            "Once at the camp, you’ll settle into a cozy yurt and enjoy dinner around a campfire, where a local folk musician will perform traditional songs using the dombra, a two-stringed instrument known for its soulful sound.",
        hour: "After a peaceful night, breakfast will be served before returning the next morning (usually by 10 AM).",
        price: [
            'Single person - $105',
            'Two people - $150 ($75 per person)',
            'Three people - $210 ($70 per person)',
            '4 or more – contact us for a custom rate'
        ],
        additional: "Private driver and local guide\n" +
            "\n" +
            "Yurt accommodation (1 night)\n" +
            "\n" +
            "Dinner & breakfast at the camp\n" +
            "\n" +
            "Campfire with traditional music\n" +
            "\n" +
            "\n" +
            "Optional: Camel ride (10 km) – $20 per person" +
            "This tour offers an authentic desert experience with the comfort of guided support and all meals included.\n" +
            "If you’d like to customize your trip or have any special requests, feel free to reach out!",
        images: [
            tour2, tour21, tour22
        ]
    },
    {
        name: "Lakeside Camp",
        plan: "(Overnight)",
        text: "Lake Aydarkul provides a wonderful setting for camping, wildlife viewing, photography, swimming and hiking. The tour begins at 3:00 PM or 4:00 PM, when we depart for the lake. You can use the warm part of the day to swim before hiking or bird watching. Lunch is included at the hotel, after which we begin the tour. We stop at the market on our way out of Sentob for dinner. After dinner by the campfire, you can stargaze or take a moonlight walk. Before bed, you will sleep in the provided tents (mattress and sleeping bag included).",
        hour: "",
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