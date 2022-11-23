import Weather from './Weather'
import './components.css'

const ShowCountry = ({country}) => (
  <div className="results">
    <h2 className="country_common-name">{country.name.common}</h2>
    <div className="capital">
      capital: {country.capital ? country.capital.join(', ') : 'none'}
    </div>
    <div className="area">area: {country.area}</div>

    <div className="languages">
      <h3>languages:</h3>
      <ul>
        {
          country.languages 
            ? Object.keys(country.languages).map(key => {
              const language = country.languages[key]
              return <li key={key}>{language}</li>
            })
            : <li>none</li>
        }
      </ul>
    </div>
    <div className="flag">
      <img src={country.flags.png} alt={country.name.common + ' flag'} />
    </div>
    <Weather 
      capital={country.capital ? country.capital : country.name.common}
      lat={country.capitalInfo.latlng ? country.capitalInfo.latlng[0] : country.latlng[0]} 
      lon={country.capitalInfo.latlng ? country.capitalInfo.latlng[1] : country.latlng[1]} 
    />
  </div>
)

export default ShowCountry