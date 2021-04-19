import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const serchValue = React.useRef('')

  const searchCocktail = () => {
    setSearchTerm(serchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  React.useEffect(() => {
    serchValue.current.focus()
  }, [])

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search Cocktail</label>
          <input
            type='text'
            id='name'
            ref={serchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
