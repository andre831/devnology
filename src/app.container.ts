import { container } from "inversify-props";

import IValidateService from "./services/ValidateService/IValidateService";
import ValidateService from "./services/ValidateService/ValidateService";

export default function buildDependencyContainer(): void {
  container.addTransient<IValidateService>(ValidateService);
}
