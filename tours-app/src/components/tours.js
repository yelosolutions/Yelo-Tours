import React from 'react'
import Tour from './tour'


//component - returns the tours wrapped in JSX elements
const Tours = ( {tours} ) => {
    // const removeTour = (id) => {
    //     let newTours = items.filter((tour) => tour.id !== id);
    // };

    return <>
        <div className="title">
            <h2>Yelo Tours</h2>
        </div>
        <section>
        {tours.map((tour) => {
            return (
            <Tour 
                id={tour.id} 
                name={tour.name} 
                image={tour.image} 
                info={tour.info}
                price={tour.price}>
            </Tour>)
        })}
        
        </section>
    </>
    }

export default Tours
