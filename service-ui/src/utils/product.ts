import { Product } from "../generated/service-product";

const MAXIMUM_RATING = 5;

export const countProductRating = (product: Product) => {
  const totalScore = product.ratings
    .map((rating) => rating.rate * rating.amount)
    .reduce((a, b) => a + b, 0);
  const maximumTotalScore = product.ratings
    .map((rating) => rating.amount * MAXIMUM_RATING)
    .reduce((a, b) => a + b, 0);
  if (maximumTotalScore === 0) {
    return 0;
  }
  return (totalScore / maximumTotalScore) * MAXIMUM_RATING;
};
