import React, { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Tours from "./components/tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);

  // let newTours = tours.filter((tour) => tour.id !== id);


  const getTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setIsError(true);
      throw new Error(error.statusName);
    } 
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h2>Error ...</h2>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours}/>
    </main>
  );
}


export default App;
