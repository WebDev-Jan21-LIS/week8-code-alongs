import React from 'react';
import './App.css';
import countriesJSON from './countries.json';
import CountriesList from './components/CountriesList';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      this.setState({
        countries: response.data
      });
    })
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        <div style={{float: "left", height:"900px", overflow: "scroll"}}>
          <CountriesList countries={countries} />
        </div>
        <div style={{float: "right", marginRight: "500px"}}>
          <Route path='/:cca3' component={CountryDetails}></Route>
        </div>   
      </div>

    );
  }
}

export default App;
