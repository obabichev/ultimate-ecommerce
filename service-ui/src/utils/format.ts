import { Profile } from "../profile.types";
import { Product } from "../generated/service-product";

export const formatProfileName = (profile: Profile) => {
  return [profile.identity.traits.name.first, profile.identity.traits.name.last]
    .filter((x) => !!x)
    .join(" ");
};


export const formatProductLanguage = (product: Product) => {
  const language = product.attributes.language;
  if (!language) {
    return null;
  }
  return `${language} edition`;
};

export const formatPrice = (price: number) => {
  return (price / 100).toFixed(2);
};