import { DeliveryLocal, NewDeliveryLocal } from "../../types/DeliveryLocal";

export default interface IDeliveryService {
  postDeliveryInfos(
    infos: NewDeliveryLocal
  ): Promise<{ sucess: boolean; data: NewDeliveryLocal }>;
  updateDeliveryInfos(
    infos: DeliveryLocal
  ): Promise<{ sucess: boolean; data: DeliveryLocal }>;
  getDeliveryInfos(
    userId: number
  ): Promise<{ sucess: boolean; data: DeliveryLocal[] }>;
}
