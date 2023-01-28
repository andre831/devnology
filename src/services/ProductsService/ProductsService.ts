import axios from "axios";
import { injectable } from "inversify-props";

import IProductsService from "./IProductsService";

@injectable()
export default class ProductsService implements IProductsService {
  async getAllProductsFromBrazilian() {
    const products = await axios
      .get(
        "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider"
      )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return products;
  }

  async getOnlyProductFromBrazil(id: string) {
    const onlyProduct = await axios
      .get(
        "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider/" +
          id
      )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return onlyProduct;
  }

  async getAllProductsFromEuropean() {
    const products = await axios
      .get(
        "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider"
      )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return products;
  }

  async getOnlyProductFromEurope(id: string) {
    const onlyProduct = await axios
      .get(
        "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider/" +
          id
      )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return onlyProduct;
  }
}
