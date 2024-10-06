import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";
import SearchFilterCountry from "../components/SearchFilterCountry";
import { apiURL } from "../util/api";

const Countries = () => {
  const [countriess, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllCountries = async () => {
      setIsLoading(true);
      setError(null);
    try {
      const res = await axios.get(`${apiURL}/all`);

     
    
      setCountries(res?.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCountryByName = async (countryName) => {
    setIsLoading(true);
    setError(null);
    try {
    const res = await axios.get(`${apiURL}/name/${countryName}`);

   
    setCountries(res.data);  
  } catch (error) {
   
if (error.response && error.response.status === 404) {
      setError("No country found with this name!");
    } else {
      setError(error.message);
    }    
  } finally {
      setIsLoading(false);
    }
  };

  const getCountryByRegion = async (regionName) => {
      setIsLoading(true);
      setError(null);
    try {
      const res = await axios.get(`${apiURL}/region/${regionName}`);

     

      setCountries(res.data);
    } catch (error) {
       setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
          <main className="main-content">
              
             

              
        <SearchFilterCountry
          onSearch={getCountryByName}
          onSelect={getCountryByRegion}
         getAllCountries={getAllCountries}
        />
        {isLoading && !error && <h4>Loading........</h4>}
        {error && <h4>{error}</h4>}
       
        {!error && !isLoading && countriess.length > 0 && (
  <section className="cards-container">
    {countriess.map((country, i) => (
        <Card key={i} country={country} />
        
    ))}
  </section>
)}
    
      </main>
    </>
  );
};

export default Countries;
