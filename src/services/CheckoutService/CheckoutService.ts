import { injectable } from "inversify-props";
import ICheckoutService from "./ICheckoutService";
import axios from "axios";

@injectable()
export default class CheckoutService implements ICheckoutService {
  async postCheckoutInfos(infos: any) {
    const postedInfos = await axios
      .post("http://localhost:3333/purchase/new", infos)
      .then((res) => res);

    return postedInfos;
  }
}
