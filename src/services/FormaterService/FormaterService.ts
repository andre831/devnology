import { injectable } from "inversify-props";

import { Product } from "../../types/Product";
import { BrazilianProduct } from "../../types/ProductsFromBrazil";
import { EuropeanProduct } from "../../types/ProductsFromEurope";

import IFormaterService from "./IFormaterService";

@injectable()
export default class FormaterService implements IFormaterService {
  formatProductUE(items: EuropeanProduct[]) {
    const formatedProduct: Product[] = items.map((product) => ({
      id: product.id + 2,
      name: product.name,
      price: +product.price,
      description: product.description,
      details: product.details,
      department: "",
      images: product.gallery,
      hasDiscount: product.hasDiscount,
      discountValue: +product.discountValue,
    }));

    return formatedProduct;
  }

  formatProductBR(items: BrazilianProduct[]) {
    const formatedProduct: Product[] = items.map((product) => ({
      id: product.id + 1,
      name: product.nome,
      price: +product.preco,
      description: product.descricao,
      details: {
        adjective: "",
        material: product.material,
      },
      department: product.departamento,
      images: [product.imagem],
      hasDiscount: false,
      discountValue: 0,
    }));

    return formatedProduct;
  }
}
