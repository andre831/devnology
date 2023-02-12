import axios from "axios";
import { injectable } from "inversify-props";

import IDeliveryService from "./IDeliveryService";
import { DeliveryLocal } from "../../types/DeliveryLocal";

@injectable()
export default class DeliveryService implements IDeliveryService {
  async getDeliveryInfos(userId: number) {
    const local = await axios
      .get(`http://localhost:3333/delivery/local/${userId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return local;
  }

  async postDeliveryInfos(infos: DeliveryLocal) {
    const local = await axios
      .post(
        `http://localhost:3333/delivery/local/${infos.userId}/create`,
        infos
      )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return local;
  }

  async updateDeliveryInfos(infos: DeliveryLocal) {
    const local = await axios
      .post(
        `http://localhost:3333/delivery/local/${infos.userId}/update`,
        infos
      )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return local;
  }
}
