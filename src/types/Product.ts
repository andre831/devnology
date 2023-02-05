export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: ProductDetails;
  department: string;
  images: string[];
  hasDiscount: boolean;
  discountValue: number;
}

export interface ProductDetails {
  adjective: string;
  material: string;
}
