export default interface IValidateService {
  checkEmailField(input: string, inputElement: string): boolean;
  checkPasswordField(input: string, inputElement: string): boolean;
}
