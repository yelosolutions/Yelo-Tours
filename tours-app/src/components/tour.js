import React, {useState} from 'react'

const Tour = ({id, image, name, info}) => {
    const [isVisible, setIsVisible] = useState(true);
    
    // const removeTour = (id) => {
    //     let newTours = items.filter((tour) => tour.id !== id);
    // };

    if (isVisible){
        return (
        <article key={id} className="single-tour">
            <img src={image} alt="" />
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{info}</p>
            </div>
            <button onClick={() => setIsVisible(!isVisible)}>Not Interested</button>
        </article>
    );
    }
    return <div key={id} className="hide">
        <button className='undo' onClick={() => setIsVisible(!isVisible)}>Undo</button>
    </div>

    
    
}

export default Tour;

