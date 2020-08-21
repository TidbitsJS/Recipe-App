import React, { useEffect, useState } from 'react';
import 'App.css';
import Recipe from 'components/Recipe';
import Nofood from 'components/Nofood';

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('aloo')
 
  const APP_ID = '7142ae22'
  const APP_KEY = 'e151efaa7cc6e928f1687c34b2fc0ec6'
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
 
  useEffect(() => {
     getRecipes()
  }, [query])
 
  const getRecipes = async () => {
    const response = await fetch(URL)
    const data =  await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" 
               className="search-bar"
               value={search}
               onChange={(e) => setSearch(e.target.value)} />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="recipes">
        { recipes.length === 0 ? <Nofood />
            : recipes.map((recipe, index) => (
          <Recipe 
            key={recipe.recipe.label+index} 
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthTags={recipe.recipe.healthLabels} />
        )) }
      </div>

    </div>
  )
}

export default App;
