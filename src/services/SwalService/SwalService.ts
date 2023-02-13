import { injectable } from "inversify-props";
import Swal from "sweetalert2";

import ISwalService from "./ISwalService";

@injectable()
export default class SwalService implements ISwalService {
  private _confirmButtonColor = "#141414";

  async success(content: string, ok: string) {
    return await Swal.fire({
      icon: "success",
      text: content,
      confirmButtonText: ok,
      confirmButtonColor: this._confirmButtonColor,
    })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }
}
