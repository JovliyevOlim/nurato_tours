import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {defaultImage, getSeoForPath, siteName, siteUrl} from "../seo/siteSeo.js";

function upsertMeta(selector, attributes, content) {
    let tag = document.head.querySelector(selector);

    if (!tag) {
        tag = document.createElement("meta");
        Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
        document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
}

function upsertLink(selector, rel, href) {
    let tag = document.head.querySelector(selector);

    if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
    }

    tag.setAttribute("href", href);
}

function upsertStructuredData(structuredData) {
    const scriptId = "seo-structured-data";
    let tag = document.getElementById(scriptId);

    if (!tag) {
        tag = document.createElement("script");
        tag.id = scriptId;
        tag.type = "application/ld+json";
        document.head.appendChild(tag);
    }

    tag.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": structuredData
    });
}

function Seo() {
    const location = useLocation();

    useEffect(() => {
        const seo = getSeoForPath(location.pathname);
        const canonicalUrl = location.pathname === "/" ? siteUrl : `${siteUrl}${location.pathname}`;
        const keywords = seo.keywords.join(", ");

        document.documentElement.lang = "en";
        document.title = seo.title;

        upsertMeta('meta[name="description"]', {name: "description"}, seo.description);
        upsertMeta('meta[name="keywords"]', {name: "keywords"}, keywords);
        upsertMeta('meta[name="robots"]', {name: "robots"}, "index, follow");
        upsertMeta('meta[name="author"]', {name: "author"}, siteName);
        upsertMeta('meta[property="og:title"]', {property: "og:title"}, seo.title);
        upsertMeta('meta[property="og:description"]', {property: "og:description"}, seo.description);
        upsertMeta('meta[property="og:type"]', {property: "og:type"}, "website");
        upsertMeta('meta[property="og:url"]', {property: "og:url"}, canonicalUrl);
        upsertMeta('meta[property="og:site_name"]', {property: "og:site_name"}, siteName);
        upsertMeta('meta[property="og:locale"]', {property: "og:locale"}, "en_US");
        upsertMeta('meta[property="og:image"]', {property: "og:image"}, defaultImage);
        upsertMeta('meta[property="og:image:alt"]', {property: "og:image:alt"}, `${siteName} logo and brand mark`);
        upsertMeta('meta[name="twitter:card"]', {name: "twitter:card"}, "summary_large_image");
        upsertMeta('meta[name="twitter:title"]', {name: "twitter:title"}, seo.title);
        upsertMeta('meta[name="twitter:description"]', {name: "twitter:description"}, seo.description);
        upsertMeta('meta[name="twitter:image"]', {name: "twitter:image"}, defaultImage);
        upsertLink('link[rel="canonical"]', "canonical", canonicalUrl);
        upsertStructuredData(seo.structuredData);
    }, [location.pathname]);

    return null;
}

export default Seo;
