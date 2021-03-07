import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = React.useState([]);

  // React.useEffect(() => {
  //   //will invoke on the initial render 
  //   //and all subsquent renders
  // })

  // React.useEffect(() => { //componentDidUpdate
  //  //will invoked on the initial render
  //  //and when "id" or "authed" changes
  // }, [id, authed])


  // React.useEffect(() => { //component didMount
  //   //will ony be invoked on the initial render
  //  }, [])


  React.useEffect(() => {
    axios.post('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div style={{float: "left", height: "900px", overflow: "scroll"}}>
        <CountriesList countries={countries} />
      </div>
      <div style={{float: "right", marginRight: "500px"}}>
        <Route path='/:cca3' component={CountryDetails}></Route>
      </div>
    </div>
  );
}

export default App;
