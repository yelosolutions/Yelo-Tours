import React, { useState } from "react";

export const tours = [
    {
        id: 1,
        img: "https://www.course-api.com/images/tours/tour-1.jpeg",
        title: "Best Of Paris In 7 Days Tour",
        content:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    },
    {
        id: 3,
        img: "https://www.course-api.com/images/tours/tour-1.jpeg",
        title: "Best Of Paris In 7 Days Tour",
        content:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    },
    {
        id: 3,
        img: "https://www.course-api.com/images/tours/tour-1.jpeg",
        title: "Best Of Paris In 7 Days Tour",
        content:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    },
];

const Tour = () => {
    const [items, setItems] = useState(tours);

    return (
    <>
    {items.map((item) => {
        const {id, img, title, content} = item;
        const clickHandler = () => {
            console.log('what');
        };
        return <article> 
                <div key={id} className="single-tour">
                    <img src={img} alt="" />
                    <div className="tour-info">
                        <h5>{title}</h5>
                        <p>{content}</p>
                    </div>
                    <button onClick={() => clickHandler()}>Not Interested</button>
                </div>
            </article>
    })}
    </>    
    );
};

export default Tour;
