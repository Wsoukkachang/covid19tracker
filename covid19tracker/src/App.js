import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["worldwide"]);

  //USESTATE = CREATE VARIABLE IN JSX
  //USEEFFECT = PULL DATA FROM API

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          //
          setCountries(countries);
        });
    };

    // call function
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    //when you click on a country in drop down menu
    const countryCode = event.target.value;

    console.log("HEYYYYY >>>>>", countryCode);

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID 19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases="1232" total="2000" />
          <InfoBox title="Recovered" cases="122" total="3000" />
          <InfoBox title="Deaths" cases="124" total="1000" />
        </div>

        <Map />
      </div>
      <Card className="app__right">
        {/* Table */}
        {/* Graph */}
      </Card>
    </div>
  );
}

export default App;
