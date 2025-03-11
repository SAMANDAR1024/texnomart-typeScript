export type ProductType = {
  image: string;
  name: string;
  id: number;
  sale_price: number;
};

export type catigoriaType = {
  products: productsCatigoria[];
  total: number;
};

export type productsCatigoria = {
  id: number;
  name: string;
  sale_price: number;
  axiom_monthly_price: string;
  image: string;
};
