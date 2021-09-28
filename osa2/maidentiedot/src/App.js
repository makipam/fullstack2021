import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = (props) => {

  return (
    <div>
      {props.name}
      <button onClick={() => props.word(props.name)}>Show</button>
    </div>
  )
}

const Weather = (props) => {
  const [weather, setWeather] = useState()
  const API_KEY = process.env.REACT_APP_API_KEY
  const city = props.country.capital

  const hook = () => {
    console.log('effect')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }
  
  useEffect(hook, [API_KEY, city])

  if (weather) {
  return (
    <div>
      <h2>Weather in {props.country.capital}</h2>
      <p> <b>temperature:</b> {weather.current.temperature} Celsius</p>
      <img src={weather.current.weather_icons[0]} width="20%" height="20%" alt={`icon of ${weather.current.weather_descriptions[0]}`}/>
      <p><b>wind:</b> {weather.current.wind_speed} km/h direction {weather.current.wind_dir}</p>
    </div>
  )
  } else {
  return (
    null
  )
  }

}

const SingleCountry = (props) => {

  return (
    <div>
      <h1>{props.country.name}</h1>
      <div>capital {props.country.capital}</div>
      <div>population {props.country.population}</div>
      <h2>languages</h2>
      <ul>
      {props.country.languages.map(language =>
        <li key={language.name}>
          {language.name}
        </li>
        )}
      </ul>
      <div>
      <img src={props.country.flags[0]} width="20%" height="20%" alt={`flag of ${props.country.name}`}/>
      < Weather country={props.country}/>
      </div>
    </div>
  )
}

const RenderCountries = (props) => {
  if (props.countries.length === 0) {
    return (
      <div></div>
    )
  } else if (props.countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (props.countries.length <= 10 && props.countries.length > 1) {
    return (
      <div>
        {props.countries.map(country =>
          <Country key={country.name} name={country.name} word={props.value} />
          )}
      </div>
    )
  } else {
    return (
      <div>
        <SingleCountry country={props.countries[0]}/>
      </div>
    )
  }
}


const App = () => {

  const [ newKeyword, setNewKeyword ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])


  const handleKeywordChange = (event) => {
    const filterWord = event.target.value.toLowerCase()

    console.log(event.target.value.toLowerCase())

    if (filterWord !== '') {
      const results = countries.filter((country) => {
        return country.name.toLowerCase().includes(filterWord.toLowerCase())
      })
      setFilteredCountries(results)
    } else {
      setFilteredCountries([])
    }

    setNewKeyword(filterWord)
  }

  const handleClick = (props) => {
    setNewKeyword(props)
    const results = countries.filter((country) => {
      return country.name.toLowerCase().includes(props.toLowerCase())
    })
    setFilteredCountries(results)
  }

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])


  return (
    <div>
      find countries <input
      value={newKeyword}
      onChange={handleKeywordChange}
      />
      <div>
      </div>
      <RenderCountries countries={filteredCountries} value={handleClick}/>
    </div>
  );
}

export default App;
