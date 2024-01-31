export interface IDish {
  id: number;
  title: string;
  price: number;
  photo_path: string | null;
  ingredients: Record<string, unknown>[];
  category:
    | "sunrise_specials"
    | "culinary_classics"
    | "bar_bliss"
    | "chefs_pick";
  weight_grams: number;
}
