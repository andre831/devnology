export interface DeliveryLocal {
  id: number;
  userId: number;
  cep: string;
  way: string;
  complement: string;
}

export interface NewDeliveryLocal {
  cep: string;
  way: string;
  complement: string;
}
