export default interface ISwalService {
  success(content: string, ok: string): Promise<any>;
}
