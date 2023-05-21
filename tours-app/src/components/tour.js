import React, { useState } from 'react'
import { tours } from './tours'

const Tour = () => {
    const [items, setItems] = useState(tours);

    return (
        <div className="single-tour">
            {items.map((item) => {
                const {id, img, title} = item;
                return <div key={id}>
                    <img src={img} alt="" />
                    <div className="tour-info">
                        <h4>{title}</h4>
                    </div>
                </div>
            })}
        </div>);   
}

export default Tour;