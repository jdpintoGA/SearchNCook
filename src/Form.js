// import React, { useEffect, useState } from 'react'
// import App from './App'
// import auth from './lib/auth'

const Form = () => {
  const appId = auth.id
  const appKey = auth.key

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
    // console.log('getting recipes')
  }, [query])

  const getRecipes = async () => {
    const request = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    )
    const data = await request.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const update = (event) => {
    setSearch(event.target.value)
  }

  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
  }

  function handleClick(event) {
    console.log(event.target)
  }
  return (
    <div>
      <div className="form">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={update}
            placeholder=" What to cook . . . "
          ></input>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
