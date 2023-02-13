import { container } from "inversify-props";

import IValidateService from "./services/ValidateService/IValidateService";
import ValidateService from "./services/ValidateService/ValidateService";
import IProductsService from "./services/ProductsService/IProductsService";
import ProductsService from "./services/ProductsService/ProductsService";
import IFormaterService from "./services/FormaterService/IFormaterService";
import FormaterService from "./services/FormaterService/FormaterService";
import ICheckoutService from "./services/CheckoutService/ICheckoutService";
import CheckoutService from "./services/CheckoutService/CheckoutService";
import IUserService from "./services/UserService/IUserService";
import UserService from "./services/UserService/UserService";
import IDeliveryService from "./services/DeliveryService/IDeliveryService";
import DeliveryService from "./services/DeliveryService/DeliveryService";
import ISwalService from "./services/SwalService/ISwalService";
import SwalService from "./services/SwalService/SwalService";

export default function buildDependencyContainer(): void {
  container.addTransient<IValidateService>(ValidateService);
  container.addTransient<IProductsService>(ProductsService);
  container.addTransient<IFormaterService>(FormaterService);
  container.addTransient<ICheckoutService>(CheckoutService);
  container.addTransient<IUserService>(UserService);
  container.addTransient<IDeliveryService>(DeliveryService);
  container.addTransient<ISwalService>(SwalService);
}
