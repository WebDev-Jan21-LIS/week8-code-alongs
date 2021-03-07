import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
    return (
        <div>
            <ul>
                {countries.map((country) => {
                    return (
                        <li key={country.alpha3Code}>
                           <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CountriesList;