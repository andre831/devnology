import { container } from "inversify-props";

import IValidateService from "./services/ValidateService/IValidateService";
import ValidateService from "./services/ValidateService/ValidateService";
import IProductsService from "./services/ProductsService/IProductsService";
import ProductsService from "./services/ProductsService/ProductsService";
import IFormaterService from "./services/FormaterService/IFormaterService";
import FormatService from "./services/FormaterService/FormaterService";
import ICheckoutService from "./services/CheckoutService/ICheckoutService";
import CheckoutService from "./services/CheckoutService/CheckoutService";
import IUserService from "./services/UserService/IUserService";
import UserService from "./services/UserService/UserService";

export default function buildDependencyContainer(): void {
  container.addTransient<IValidateService>(ValidateService);
  container.addTransient<IProductsService>(ProductsService);
  container.addTransient<IFormaterService>(FormatService);
  container.addTransient<ICheckoutService>(CheckoutService);
  container.addTransient<IUserService>(UserService);
}
