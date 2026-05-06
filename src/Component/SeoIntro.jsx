import React from "react";

function SeoIntro({title, description}) {
    return (
        <section className="visually-hidden seo-page-intro" aria-label="Page summary">
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
}

export default SeoIntro;
