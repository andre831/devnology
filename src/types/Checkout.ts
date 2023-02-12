import { Product } from "./Product";

export interface CheckoutInfos {
  id: number;
  userId: number;
  name: string;
  last_name: string;
  shopping_card: {
    name: string;
    cvv: number;
    number_card: string;
    type: string;
  };
}

export interface NewCheckoutInfos {
  userId: number;
  name: string;
  last_name: string;
  shopping_card: {
    name: string;
    cvv: number;
    number_card: string;
    type: string;
  };
}

export interface PayInformations {
  userId: number;
  localId: number | null;
  purchaseId: number | null;
  items: Product[];
  total: string;
}
