import React from "react";

import detailsStyles from './ingredient-details.module.css';


interface IngredientDetailsProps {
  ingredient: any
}

const IngredientDetails = ({ingredient}: IngredientDetailsProps) => {
  return (
    <div>
      <span className={`${detailsStyles.content} pl-4 pr-4`}>
        <img src={ingredient.image_large} alt={ingredient.name} />
      </span>
      <span className={`${detailsStyles.content}`}>
        <p className={`${detailsStyles.name} text text_type_main-default mt-4 mb-8`}>{ingredient.name}</p>
      </span>
      <span className={`${detailsStyles.multicontent} mb-5`}>
        <span className={`${detailsStyles.text}`}>
          <p className="text text_type_main-small text_color_inactive mb-1">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </span>
        <span className={`${detailsStyles.text}`}>
          <p className="text text_type_main-small text_color_inactive mb-1">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </span>
        <span className={`${detailsStyles.text}`}>
          <p className="text text_type_main-small text_color_inactive mb-1">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </span>
        <span className={`${detailsStyles.text}`}>
          <p className="text text_type_main-small text_color_inactive mb-1">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </span>
      </span>
    </div>
  )
}

export default IngredientDetails;
