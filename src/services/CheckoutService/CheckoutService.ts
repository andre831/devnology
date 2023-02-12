import axios from "axios";
import { injectable } from "inversify-props";
import { CheckoutInfos, NewCheckoutInfos } from "../../types/Checkout";
import ICheckoutService from "./ICheckoutService";

@injectable()
export default class CheckoutService implements ICheckoutService {
  async getCheckoutInfos(infos: CheckoutInfos) {
    const postedInfos = await axios
      .post(`http://localhost:3333/purchase/${infos.userId}/new`, infos)
      .then((res) => res.data);

    return postedInfos;
  }

  async postCheckoutInfos(infos: NewCheckoutInfos) {
    const postedInfos = await axios
      .post(`http://localhost:3333/purchase/${infos.userId}/new`, infos)
      .then((res) => res.data);

    return postedInfos;
  }
}
