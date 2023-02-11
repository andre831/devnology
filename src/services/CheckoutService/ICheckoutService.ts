export default interface ICheckoutService {
  postCheckoutInfos(infos: any): Promise<any>;
}
