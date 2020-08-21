import React, { useState } from 'react'
import food from 'components/assets/food.jpeg'
import style from 'components/recipe.module.css'

const Nofood = () => {
    const [show, setShow] = useState(false) 
    return (
        <div>
          <div className={style.recipe}>
            <div className={style.head}>
            
                <h1 className={style.title} style={{fontSize: 23}}>Yummy Tummy</h1>
                <img src={food} 
                     className={style.image} alt="recipe" /> 
                <button className={style.showBtn}
                        style={{marginBottom: 5 }} 
                        onClick={() => setShow(!show)}>
                    {show ? 'Hide' : 'View'}
                </button>

                {show ? (
                    <h3>No food Recipe</h3>
                ) : null}

            </div>
          </div> 
        </div>
    )
}

export default Nofood
