import React, { useState } from 'react'
import style from 'components/recipe.module.css'

const Recipe = ({ title, calories, image, ingredients, healthTags }) => {
    const [show, setShow] = useState(false)

    const showDetails = () => {
        setShow(!show)
    }

    return (
        <div className={style.recipe}>
            <div className={style.head}>
            
                <h1 className={style.title}>{title}</h1>
                <img src={image} className={style.image} alt="recipe" /> 
                <button className={style.showBtn} 
                    onClick={showDetails}>
                    {show ? 'Hide' : 'View'}
                </button>

            </div>
            { show ? (
               <div>
                 <h3 style={{textAlign: 'center'}}>Calories: {Math.round(calories)} Kcal </h3>
                  <ol className={style.list}>
                      {ingredients.map((ingredient, index) => (
                         <li key={index} style={{ margin: '0.7rem 0' }}>{ingredient.text}</li>
                      ) )}
                  </ol>
                  <div className={style.health}>
                    {healthTags.map((tag, index) => (
                        <button key={index+tag} className={style.tags}>{tag}</button>
                    ))}
                  </div>
               </div>
            ) : null }
        </div>
    )
}

export default Recipe
