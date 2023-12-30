export interface Dish {
  id: number;
  title: string;
  price: number;
  photo_path: string;
  weight_grams: number;
  ingredients: {
    title: string;
    is_required: boolean;
  };
}
