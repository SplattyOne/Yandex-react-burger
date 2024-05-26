export interface IngredientProps {
  _id: string
  type: string
  image: string
  image_large: string
  image_mobile: string
  name: string
  price: number
  calories: number
  proteins: number
  fat: number
  carbohydrates: number
  _v: number
}

export interface IngredientCountedProps extends IngredientProps {
  count: number
}
