import { container } from "inversify-props";

import IValidateService from "./services/ValidateService/IValidateService";
import ValidateService from "./services/ValidateService/ValidateService";
import IProductsService from "./services/ProductsService/IProductsService";
import ProductsService from "./services/ProductsService/ProductsService";

export default function buildDependencyContainer(): void {
  container.addTransient<IValidateService>(ValidateService);
  container.addTransient<IProductsService>(ProductsService);
}
