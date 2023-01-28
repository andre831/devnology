import { injectable } from "inversify-props";

import IValidateService from "./IValidateService";

@injectable()
export default class ValidateService implements IValidateService {
  private _emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  private _passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

  _alertErrorField(validator: RegExp, inputElement: string) {
    const e = document.querySelector(inputElement) as HTMLInputElement;

    if (!validator.test(e.value) && e.value != "") {
      e.style.borderColor = "#FF0000";
    } else {
      e.style.borderColor = "#000000";
    }
  }

  checkEmailField(input: string, inputElement: string) {
    const validatedEmailField = this._emailRegex.test(input);

    this._alertErrorField(this._emailRegex, inputElement);

    return validatedEmailField;
  }

  checkPasswordField(input: string, inputElement: string) {
    const validatedPasswordField = this._passwordRegex.test(input);

    this._alertErrorField(this._passwordRegex, inputElement);

    return validatedPasswordField;
  }
}
