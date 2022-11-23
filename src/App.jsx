import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'

const StyledApp = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  const hook = () => {
    const fetchCountries = async () => {
      try {
        const countries = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(countries.data)
      } catch (e) {
        console.error('failed fetch: ', e)
      }
    }

    fetchCountries()
  }

  useEffect(hook, []);

  const handleChange = event => {
    const value = event.target.value
    setSearchFilter(value)
  }

  const viewCountry = event => {
    const countryName = event.target.dataset.country
    setSearchFilter(countryName)
  }

  let filteredCountries = countries.filter(({name}) => {
    return name.common.toLowerCase().includes(searchFilter.toLowerCase())
  })
  
  const isExactName = filteredCountries.find(({name}) => {
    return name.common.toLowerCase() === searchFilter.toLowerCase()
  })
  if (isExactName) filteredCountries = [isExactName]

  return (
    <StyledApp>
      <Search str={searchFilter} onChange={handleChange} />
      <Results data={filteredCountries} onButtonClick={viewCountry} />
    </StyledApp>
  );
}

export default App
