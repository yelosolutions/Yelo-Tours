import React from 'react'
import Tour from './tour'


//component - returns the tours wrapped in JSX elements
const Tours = () => {
    return (
    <>
    <div className="title">
        <h2>Yelo Tours</h2>
    </div>
    <section>
        <Tour/>
    </section></>
    
    )
}

export default Tours
