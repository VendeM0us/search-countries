import Weather from './Weather'
import './components.css'

const ShowCountry = ({country}) => (
  <div className="results">
    <h2 className="country_common-name">{country.name.common}</h2>
    <div className="capital">
      capital: {country.capital.join(', ')}
    </div>
    <div className="area">area: {country.area}</div>

    <div className="languages">
      <h3>languages:</h3>
      <ul>
        {
          Object.keys(country.languages).map(key => {
            const language = country.languages[key]
            return <li key={key}>{language}</li>
          })
        }
      </ul>
    </div>
    <div className="flag">
      <img src={country.flags.png} alt={country.name.common + ' flag'} />
    </div>
    <Weather 
      capital={country.capital[0]}
      lat={country.capitalInfo.latlng[0]} 
      lon={country.capitalInfo.latlng[1]} 
    />
  </div>
)

export default ShowCountry