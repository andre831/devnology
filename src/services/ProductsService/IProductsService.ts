import * as Brazil from "../../types/ProductsFromBrazil";
import * as Europe from "../../types/ProductsFromEurope";

export default interface IProductsService {
  getAllProductsFromBrazilian(): Promise<Brazil.BrazilianProduct[]>;
  getOnlyProductFromBrazil(id: string): Promise<Brazil.BrazilianProduct>;

  getAllProductsFromEuropean(): Promise<Europe.EuropeanProduct[]>;
  getOnlyProductFromEurope(id: string): Promise<Europe.EuropeanProduct>;
}
