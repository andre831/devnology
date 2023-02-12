import {
  CheckoutInfos,
  NewCheckoutInfos,
  PayInformations,
} from "../../types/Checkout";

export default interface ICheckoutService {
  getCheckoutInfos(
    infos: CheckoutInfos
  ): Promise<{ success: boolean; data: CheckoutInfos[] }>;

  postCheckoutInfos(
    infos: NewCheckoutInfos
  ): Promise<{ success: boolean; data: CheckoutInfos }>;

  postCompletePayment(
    infos: PayInformations
  ): Promise<{ success: boolean; data: PayInformations }>;
}
