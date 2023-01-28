export interface EuropeProduct {
  description: string;
  details: EuropeProductDetails;
  discountValue: string;
  gallery: string[];
  hasDiscount: boolean;
  id: string;
  name: string;
  price: string;
}

export interface EuropeProductDetails {
  adjective: string;
  material: string;
}
