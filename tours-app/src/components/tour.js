import React, {useState} from 'react'

const Tour = ({id, image, name, info, price}) => {
    const [isVisible, setIsVisible] = useState(true);
    
    // const removeTour = (id) => {
    //     let newTours = items.filter((tour) => tour.id !== id);
    // };

    if (isVisible){
        return (
        <article key={id} className="single-tour">
            <img src={image} alt="" />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>{info}</p>
                <button className='delete-btn' onClick={() => setIsVisible(!isVisible)}>Not Interested</button>
            </footer>
            
        </article>
    );
    }
    return <article key={id} className="hide">
        <button className='undo' onClick={() => setIsVisible(!isVisible)}>Undo</button>
    </article>

}

export default Tour;

