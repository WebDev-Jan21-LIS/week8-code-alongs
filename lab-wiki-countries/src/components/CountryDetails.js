import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails({ match }) {
    const [country, setCountry] = React.useState({
        name: '',
        capital: '',
        area: '',
        borders: []
    })

    React.useEffect(() => {
        const countryCCA3 = match.params.cca3;
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCCA3}`)
            .then((response) => {
                setCountry(response.data);
            });

    }, [match.params.cca3])

    return (
        <div>
            <h2>{country.name}</h2>
            <h3>Capital: {country.capital}</h3>
            <p>Area: {country.area} km<sup>2</sup></p>
            <ul>
                {country.borders.map((border, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/${border}`}>
                                {border}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CountryDetails