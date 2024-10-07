import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Card = ({ country }) => {
  const { darkMode } = useContext(Context);

  return (
    <div className={darkMode ? "country-card-dark" : "country-card"}>
      <div className="country-preview">
        {console.log("country::::", country)}
        <Link
          to={`/singlecountry/${country.name.common}`}
          aria-label="country info"
        >
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="image"
          />
        </Link>
      </div>

      <div className={darkMode ? "country-info-dark" : "country-info"}>
        <div className="country-detail">
          <Link
            to={`/singlecountry/${country.name.common}`}
            aria-label="country info"
          >
            <div style={{ color: darkMode ? "white" : "black" }}>
              <h2>{country.name.common}</h2>
            </div>
          </Link>
          <p>
            Population:{" "}
            <span>{country.population.toLocaleString("en-US")}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
