import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context";
import { apiURL } from "../util/api";
import axios from "axios";


const SingleCountry = () => {
  const {darkMode } = useContext(Context);
  const { name } = useParams();
 const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  

  const getCountryByName = async (countryName) => {
  setIsLoading(true);  
  try {
    const res = await axios.get(`${apiURL}/name/${countryName}`);

    if (!res.data) throw new Error("No country found with this name!");

    setCountries(res.data); 
  } catch (error) {
    setError(error.message); 
  } finally {
    setIsLoading(false);  
  }
};


  useEffect(() => {
    getCountryByName(name);
  },[name])


  return (
    <main className="main-content">

      <div className="back-btn-container">
        {console.log("countriess", countries, "name", name)}
        <Link to="/">
          <button className= {darkMode ? "back-btn-dark" : "back-btn"}>
            Back
          </button>
        </Link>
      </div> 
       {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}
      {countries?.map((country, index) => (
         <div className="detail-container" key={index}>
            <div className="detail-page-img-position">
              <img src={country.flags.png} alt={`${country.name.common} flag`} className="detail-country-img" />
            </div>

            <article className="detail-info-position">
              <h2>{country?.name?.common || "__"}</h2>
              <p>Population: <span>{country?.population.toLocaleString('en-US') || "__"}</span></p>
              <p>Region: <span>{country?.region || "__"}</span></p>
              <p>Subregion: <span>{country?.subregion || "__"}</span></p>
            <p>Capital: <span>{country?.capital || "__"}</span></p>
            <p>Currencies: <span>{Object.entries(country?.currencies).map(([code, currency], index) => currency.name)}</span></p>
              <p>Languages: <span>{Object.values(country?.languages).join(", ")}</span></p>
            </article>

      </div>
      ))}
         
    </main>
  );
}

export default SingleCountry;