import React from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CountryDetails extends React.Component {
    state = {
        name: '',
        capital: '',
        area: '',
        borders: [] 
    }

    componentDidMount() {
       this.getCountryDetail();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.getCountryDetail();
        }
    }

    getCountryDetail = () => {
        const countryCCA3 = this.props.match.params.cca3;
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCCA3}`).then((response) => {
            console.log(response.data);
            this.setState({
                name: response.data.name,
                capital: response.data.capital,
                area: response.data.area,
                borders: response.data.borders
            })
        });
        // const foundCountry = countriesJSON.find((country) => {
        //     return country.cca3 === countryCCA3;
        // })
    }

    render() {
        const { name, capital, area, borders } = this.state; 
        return(
            <div>
                <h2>{name}</h2>
                <h3>Capital: {capital}</h3>
                <p>Area: {area} km<sup>2</sup></p>
                <ul>
                    {borders.map((border, index) => {
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

}

export default CountryDetails;