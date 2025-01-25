import { Product } from '../utils/productService';

//calcula a média de avalição do produto
export const calculateRating = (reviews: Product["reviews"]) => {
  //vai iterar em todos os reviews, começando em 0, sum é o acumulador e review o valor atual
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return reviews.length ? (total / reviews.length).toFixed(1) : "N/A";
};

//ordenar produtos por popularidade
export const getPopularProducts = (products: Product[], count: number) => {
  const sortedByPopularity = [...products].sort((a, b) => b.popularity - a.popularity);
  return sortedByPopularity.slice(0, count); //retorna a quantidade desejada
};
