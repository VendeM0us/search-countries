const Search = ({str, onChange}) => (
  <div className='search'>
    find countries:
    <input value={str} onChange={onChange} />
  </div>
)

export default Search