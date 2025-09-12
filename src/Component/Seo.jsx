import {useEffect} from "react";

export default function Seo({title, description, keywords, canonical}) {
    useEffect(() => {
        if (title) document.title = title;

        if (description) {
            let descTag = document.querySelector("meta[name='description']");
            if (!descTag) {
                descTag = document.createElement("meta");
                descTag.setAttribute("name", "description");
                document.head.appendChild(descTag);
            }
            descTag.setAttribute("content", description);
        }

        if (keywords) {
            let keyTag = document.querySelector("meta[name='keywords']");
            if (!keyTag) {
                keyTag = document.createElement("meta");
                keyTag.setAttribute("name", "keywords");
                document.head.appendChild(keyTag);
            }
            keyTag.setAttribute("content", keywords);
        }

        if (canonical) {
            let canonTag = document.querySelector("link[rel='canonical']");
            if (!canonTag) {
                canonTag = document.createElement("link");
                canonTag.setAttribute("rel", "canonical");
                document.head.appendChild(canonTag);
            }
            canonTag.setAttribute("href", canonical);
        }
    }, [title, description, keywords, canonical]);

    return null; // Hech narsa render qilmaydi
}