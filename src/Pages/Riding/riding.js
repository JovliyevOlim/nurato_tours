import riding1 from "../../assets/riding/riding1.jpg";
import riding2 from "../../assets/riding/riding2.JPG";
import riding3 from "../../assets/riding/riding3.jpg";

export const tours = [
    {
        name: "Horseback Riding to Fozilmon Lake",
        plan: "(Full-Day Tour)",
        text: "Fozilmon Lake is located about 13 km from Sentob village, nestled beside the scenic Fozilmon Mountain.\n" +
            "This full-day horseback riding tour takes you through the Sentob and Chavak river valleys, where you’ll witness unique natural rock formations, ancient petroglyphs, and get a glimpse into local rural life — including agriculture, shepherding, traditional homes, and daily village routines.",
        text1: "One of the highlights of this route is a visit to the ancient village of Qorgon-Tepa, rich in history and authentic charm.",
        text3: "",
        hour: "Departure: Around 8:00 AM\n" +
            "Return: Approximately 5:00 PM (same day)",
        price: [
            {
                name: "Costs for the tour:",
                list: ['Single person – $60',
                    'Two people – $110 ($55 per person)',
                    'Three people – $150 ($50 per person)',
                    'Four or more people – price upon request'],
            },
        ],
        priceIncludesText: "The price includes:",
        priceIncludes: ['Horse rental',
            'Local guide',
            'Picnic lunch',
            'Drinking water',],
        additional: [],
        images: [
            riding1, riding2, riding3
        ]
    }
]