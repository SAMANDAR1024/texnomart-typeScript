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

export type searchInputType = {
  categories: {
    id: number;
    slug: string;
    title: string;
  }[];
  models: {
    id: number;
    slug: string;
    title: string;
  }[];
  products: {
    id: number;
    image: string;
    name: string;
  }[];
};
