import {info} from "../Pages/Info/inf.js";

export const siteName = "Nurota Trips";
export const siteUrl = "https://nurotatrips.com";
export const defaultImage = `${siteUrl}/android-chrome-512x512.png`;

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const address = {
    "@type": "PostalAddress",
    addressLocality: "Nurota",
    addressRegion: "Navoi Region",
    addressCountry: "UZ",
    streetAddress: "Sentob village, house 102"
};

const sameAs = [
    "https://www.facebook.com/share/1CXBKzaL4b/?mibextid=wwXIfr",
    "https://www.instagram.com/nosir_davranov/?utm_source=ig_web_button_share_sheet"
];

const travelAgencySchema = {
    "@type": "TravelAgency",
    "@id": organizationId,
    name: siteName,
    url: siteUrl,
    image: defaultImage,
    logo: defaultImage,
    description: "Nurota Trips is a family-run travel service in Sentob, organizing Nurota, Aydarkul, Kyzylkum, Sarmishsoy and mountain tours in Uzbekistan.",
    telephone: "+998959227555",
    email: "davronn340@gmail.com",
    address,
    areaServed: [
        "Nurota",
        "Sentob",
        "Aydarkul Lake",
        "Kyzylkum Desert",
        "Sarmishsoy Gorge",
        "Nuratau Mountains",
        "Uzbekistan"
    ],
    sameAs
};

const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: siteName,
    inLanguage: "en",
    publisher: {
        "@id": organizationId
    }
};

function pageUrl(pathname) {
    return pathname === "/" ? siteUrl : `${siteUrl}${pathname}`;
}

function breadcrumbSchema(pathname, label) {
    const items = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
        }
    ];

    if (pathname !== "/") {
        items.push({
            "@type": "ListItem",
            position: 2,
            name: label,
            item: pageUrl(pathname)
        });
    }

    return {
        "@type": "BreadcrumbList",
        itemListElement: items
    };
}

function webPageSchema(pathname, name, description) {
    return {
        "@type": "WebPage",
        "@id": `${pageUrl(pathname)}#webpage`,
        url: pageUrl(pathname),
        name,
        description,
        isPartOf: {
            "@id": websiteId
        },
        about: {
            "@id": organizationId
        },
        inLanguage: "en"
    };
}

const faqEntities = info.map((item) => {
    const directAnswer = item.text ? [item.text] : [];
    const nestedAnswers = item.list.flatMap((entry) => entry.text);

    return {
        "@type": "Question",
        name: item.title,
        acceptedAnswer: {
            "@type": "Answer",
            text: [...directAnswer, ...nestedAnswers].join(" ")
        }
    };
});

const pageDefinitions = {
    "/": {
        label: "Home",
        title: "Nurota Tours and Sentob Guesthouse | Aydarkul, Nuratau, Uzbekistan",
        description: "Family-run Nurota tours from Sentob village with guesthouse stays, Aydarkul Lake trips, Kyzylkum desert adventures, Sarmishsoy visits and mountain trekking in Uzbekistan.",
        keywords: [
            "Nurota tours",
            "Nurata tours",
            "Sentob guesthouse",
            "Aydarkul Lake tour",
            "Kyzylkum desert tour",
            "Nuratau mountain trekking",
            "Sarmishsoy Gorge",
            "Fozilmon Lake",
            "Uzbekistan tours"
        ],
        structuredData: [
            travelAgencySchema,
            websiteSchema,
            webPageSchema("/", "Nurota Tours and Sentob Guesthouse", "Family-run Nurota tours, guesthouse stays and local experiences in Sentob, Aydarkul, Kyzylkum and the Nuratau Mountains."),
            breadcrumbSchema("/", "Home"),
            {
                "@type": "ItemList",
                name: "Popular Nurota destinations and experiences",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Sentob village guesthouse", url: `${siteUrl}/guesthouse` },
                    { "@type": "ListItem", position: 2, name: "Aydarkul Lake and Kyzylkum Desert tours", url: `${siteUrl}/desert` },
                    { "@type": "ListItem", position: 3, name: "Nuratau mountain treks", url: `${siteUrl}/mountains` },
                    { "@type": "ListItem", position: 4, name: "Sarmishsoy Gorge petroglyph tour", url: `${siteUrl}/gorge` },
                    { "@type": "ListItem", position: 5, name: "Horseback riding to Fozilmon Lake", url: `${siteUrl}/riding` }
                ]
            }
        ]
    },
    "/desert": {
        label: "Desert Tours",
        title: "Aydarkul Lake and Kyzylkum Desert Tours from Nurota | Nurota Trips",
        description: "Explore Aydarkul Lake, the Kyzylkum Desert and yurt camps from Sentob and Nurota with day trips, overnight desert stays and lakeside camping in Uzbekistan.",
        keywords: [
            "Aydarkul Lake tour",
            "Kyzylkum Desert tour",
            "Nurota desert tours",
            "Sentob desert trip",
            "yurt camp Uzbekistan",
            "Aydarkul camping"
        ],
        structuredData: [
            webPageSchema("/desert", "Aydarkul Lake and Kyzylkum Desert Tours from Nurota", "Day trips and overnight desert adventures to Aydarkul Lake and the Kyzylkum Desert from Sentob and Nurota."),
            breadcrumbSchema("/desert", "Desert Tours"),
            {
                "@type": "CollectionPage",
                name: "Aydarkul Lake and Kyzylkum Desert tours",
                hasPart: [
                    "Beautiful Landscapes of Aydarkul and Kyzylkum",
                    "Yurt Camping Adventure",
                    "Lakeside Camp"
                ],
                about: [
                    { "@type": "Place", name: "Aydarkul Lake" },
                    { "@type": "Place", name: "Kyzylkum Desert" },
                    { "@type": "Place", name: "Sentob village" }
                ]
            }
        ]
    },
    "/mountains": {
        label: "Mountain Treks",
        title: "Nuratau Mountain Treks from Sentob and Nurota | Nurota Trips",
        description: "Book Nuratau mountain treks from Sentob and Nurota, including village-to-village hiking, Fozilmon routes, Sob to Sentob trails, Mojrum and Uhum visits.",
        keywords: [
            "Nuratau mountain trekking",
            "Nurota mountain tours",
            "Sentob hiking",
            "Sob to Sentob trail",
            "Mojrum tour",
            "Uhum village trek",
            "Fozilmon Lake hike"
        ],
        structuredData: [
            webPageSchema("/mountains", "Nuratau Mountain Treks from Sentob and Nurota", "Village-to-village trekking and cultural hiking routes through Sentob, Sob, Mojrum, Uhum and the Nuratau Mountains."),
            breadcrumbSchema("/mountains", "Mountain Treks"),
            {
                "@type": "CollectionPage",
                name: "Nuratau mountain treks",
                hasPart: [
                    "Mountain and Lake Combined Tour",
                    "Hidden Trails Tour",
                    "Village-to-Village Trekking in the Nuratau Mountains"
                ],
                about: [
                    { "@type": "Place", name: "Sentob village" },
                    { "@type": "Place", name: "Sob village" },
                    { "@type": "Place", name: "Mojrum village" },
                    { "@type": "Place", name: "Uhum village" },
                    { "@type": "Place", name: "Fozilmon Lake" }
                ]
            }
        ]
    },
    "/gorge": {
        label: "Sarmishsoy Gorge",
        title: "Sarmishsoy Gorge Petroglyph Tour near Nurota | Nurota Trips",
        description: "Visit Sarmishsoy Gorge near Nurota to see one of Central Asia’s largest petroglyph collections with a guided half-day cultural and nature tour from Sentob.",
        keywords: [
            "Sarmishsoy Gorge",
            "Sarmishsoy petroglyphs",
            "Nurota petroglyph tour",
            "Nurata day trip",
            "Navoi cultural tour"
        ],
        structuredData: [
            webPageSchema("/gorge", "Sarmishsoy Gorge Petroglyph Tour near Nurota", "Guided half-day excursion from Sentob and Nurota to the ancient petroglyphs of Sarmishsoy Gorge."),
            breadcrumbSchema("/gorge", "Sarmishsoy Gorge"),
            {
                "@type": "CollectionPage",
                name: "Sarmishsoy Gorge tour",
                about: [
                    { "@type": "Place", name: "Sarmishsoy Gorge" },
                    { "@type": "Place", name: "Nurota" }
                ]
            }
        ]
    },
    "/riding": {
        label: "Horseback Riding",
        title: "Horseback Riding to Fozilmon Lake from Sentob | Nurota Trips",
        description: "Ride on horseback from Sentob to Fozilmon Lake through mountain valleys, village trails and historic landscapes in the Nurota region of Uzbekistan.",
        keywords: [
            "Fozilmon Lake horseback riding",
            "Sentob horse tour",
            "Nurota horse riding",
            "Qorgon Tepa tour",
            "Uzbekistan riding trip"
        ],
        structuredData: [
            webPageSchema("/riding", "Horseback Riding to Fozilmon Lake from Sentob", "Full-day horseback riding route from Sentob to Fozilmon Lake and Qorgon Tepa in the Nurota region."),
            breadcrumbSchema("/riding", "Horseback Riding"),
            {
                "@type": "CollectionPage",
                name: "Horseback riding tours in Nurota",
                about: [
                    { "@type": "Place", name: "Fozilmon Lake" },
                    { "@type": "Place", name: "Sentob village" },
                    { "@type": "Place", name: "Qorgon Tepa" }
                ]
            }
        ]
    },
    "/info": {
        label: "Travel Information",
        title: "Nurota and Sentob Travel Information | Transport, Seasons, Payment",
        description: "Useful Nurota and Sentob travel information covering transport from Samarkand, Bukhara and Navoi, best time to visit, payments, food and local village tips.",
        keywords: [
            "how to get to Nurota",
            "Sentob travel information",
            "Nurata transport",
            "Navoi to Sentob",
            "Samarkand to Nurota",
            "Bukhara to Nurota"
        ],
        structuredData: [
            webPageSchema("/info", "Nurota and Sentob Travel Information", "Travel tips for reaching Sentob and Nurota, local payments, seasons, food and village logistics."),
            breadcrumbSchema("/info", "Travel Information"),
            {
                "@type": "FAQPage",
                mainEntity: faqEntities
            }
        ]
    },
    "/guesthouse": {
        label: "Guesthouse",
        title: "Obi Chashma Guest House in Sentob, Nurota Region | Nurota Trips",
        description: "Stay at Obi Chashma Guest House in Sentob village near Nurota for authentic Uzbek hospitality, mountain access, local food and tours to nearby landmarks.",
        keywords: [
            "Sentob guesthouse",
            "Obi Chashma guest house",
            "Nurota accommodation",
            "Nurata homestay",
            "Sentob village stay"
        ],
        structuredData: [
            webPageSchema("/guesthouse", "Obi Chashma Guest House in Sentob", "Family-run guest house in Sentob village with local meals, tours and access to Nurota region attractions."),
            breadcrumbSchema("/guesthouse", "Guesthouse"),
            {
                "@type": "LodgingBusiness",
                name: "Obi Chashma Guest House",
                url: `${siteUrl}/guesthouse`,
                image: defaultImage,
                telephone: "+998959227555",
                email: "davronn340@gmail.com",
                address,
                areaServed: [
                    "Sentob village",
                    "Nurota region",
                    "Navoi Region"
                ],
                sameAs: [
                    "https://www.booking.com/hotel/uz/sentyab-obi-chashma-guest-house.ru.html"
                ]
            }
        ]
    },
    "/contact": {
        label: "Contact",
        title: "Contact Nurota Trips in Sentob, Uzbekistan | Booking and Directions",
        description: "Contact Nurota Trips in Sentob village for bookings, guesthouse stays, WhatsApp, Telegram, phone, email and directions in the Nurota region of Uzbekistan.",
        keywords: [
            "contact Nurota Trips",
            "Sentob contact",
            "Nurota booking phone",
            "Obi Chashma guesthouse contact",
            "Nurota WhatsApp"
        ],
        structuredData: [
            webPageSchema("/contact", "Contact Nurota Trips in Sentob", "Contact details, map location and booking channels for Nurota Trips and Obi Chashma Guest House in Sentob."),
            breadcrumbSchema("/contact", "Contact"),
            {
                ...travelAgencySchema,
                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        contactType: "customer service",
                        telephone: "+998959227555",
                        email: "davronn340@gmail.com",
                        areaServed: "UZ",
                        availableLanguage: ["English", "Russian", "Uzbek"]
                    }
                ]
            }
        ]
    },
    "/booking": {
        label: "Booking",
        title: "Book Nurota Tours and Sentob Guesthouse | Nurota Trips",
        description: "Send a booking request for Nurota tours, Sentob guesthouse stays, Aydarkul desert trips, Sarmishsoy excursions and horseback riding in Uzbekistan.",
        keywords: [
            "book Nurota tour",
            "Sentob booking",
            "Aydarkul tour booking",
            "Nurota guesthouse reservation",
            "Uzbekistan local tours"
        ],
        structuredData: [
            webPageSchema("/booking", "Book Nurota Tours and Sentob Guesthouse", "Booking page for Nurota Trips tours and Obi Chashma Guest House in Sentob village."),
            breadcrumbSchema("/booking", "Booking")
        ]
    }
};

export function getSeoForPath(pathname) {
    return pageDefinitions[pathname] || pageDefinitions["/"];
}
