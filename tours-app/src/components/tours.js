import React from 'react'
import Tour from './tour'


//component - returns the tours wrapped in JSX elements
const Tours = ( {tours, removeTour} ) => {
    

    return <>
        <div className="title">
            <h2>Yelo Tours</h2>
        </div>
        <section>
        {tours.map((tour) => {
            return (
            <Tour 
                key={tour.id} {...tour} removeTour={removeTour}> 
            </Tour>)
        })}
        
        </section>
    </>
    }

export default Tours
