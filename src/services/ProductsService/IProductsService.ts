import * as Brazil from "../../types/ProductsFromBrazil";
import * as Europe from "../../types/ProductsFromEurope";

export default interface IProductsService {
  getAllProductsFromBrazilian(): Promise<Europe.EuropeProduct[]>;
  getOnlyProductFromBrazil(id: string): Promise<Brazil.BrazilianProduct>;

  getAllProductsFromEuropean(): Promise<Europe.EuropeProduct[]>;
  getOnlyProductFromEurope(id: string): Promise<Europe.EuropeProduct>;
}
