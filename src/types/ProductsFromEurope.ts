export interface EuropeanProduct {
  description: string;
  details: EuropeanProductDetails;
  discountValue: string;
  gallery: string[];
  hasDiscount: boolean;
  id: string;
  name: string;
  price: string;
}

export interface EuropeanProductDetails {
  adjective: string;
  material: string;
}
