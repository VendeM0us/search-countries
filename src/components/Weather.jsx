import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({capital, lat, lon}) => {
  const apiKey = import.meta.env.VITE_API_KEY
  const [weatherData, setWeatherData] = useState({})
  const [fetchedData, setFetchedData] = useState(false)

  const hook = () => {
    const fetchData = async () => {
      try {
        const promise = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        setWeatherData(promise.data)
        setFetchedData(true)
      } catch (e) {
        console.error('fetch failed: ', e)
      }
    }

    fetchData()
  }

  useEffect(hook, [])
  
  if (fetchedData) {
    return (
      <div className="weather">
        <h2>Weather in {capital}</h2>
        <div className="temperature">
          temperature: {weatherData.main.temp} Celcius
        </div>
        <div className="weather-icon">
          {weatherData.weather.map(weather => {
            const icon = weather.icon
            const description = weather.description
            return <img key={weather.id} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
          })}
        </div>
        <div className="wind">
          wind: {weatherData.wind.speed} m/s
        </div>
      </div>
    )
  }
}

export default Weather