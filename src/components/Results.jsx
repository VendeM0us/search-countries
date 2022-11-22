import ShowCountry from './ShowCountry'

const Results = ({data, onButtonClick}) => {
  if (data.length > 10) {
    return <div className="results">Too many matches, specify another filter</div>
  } else if (data.length === 1) {
    return <ShowCountry country={data[0]} />
  }
  
  return (
    <div className="results">
      {
        data.map(({name}) => {
          return (
            <div key={name.common}>
              {name.common}
              <button data-country={name.common} onClick={onButtonClick}>show</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Results