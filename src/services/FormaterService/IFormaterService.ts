import { Product } from "../../types/Product";
import { BrazilianProduct } from "../../types/ProductsFromBrazil";
import { EuropeanProduct } from "../../types/ProductsFromEurope";

export default interface IFormaterService {
  formatProductUE(items: EuropeanProduct[]): Product[];
  formatProductBR(items: BrazilianProduct[]): Product[];
}
