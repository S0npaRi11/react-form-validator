import { email } from "./email";
import { empty } from "./empty";
import { max } from "./max";
import { maxLength } from "./maxLength";
import { min } from "./min";
import { minLength } from "./minLength";
import { pattern } from "./pattern";
import { required } from "./required";
import { requiredTrue } from "./requiredTrue";

export const Validators = {
    required,
    pattern,
    min,
    max,
    requiredTrue,
    email,
    minLength,
    maxLength,
    empty
}