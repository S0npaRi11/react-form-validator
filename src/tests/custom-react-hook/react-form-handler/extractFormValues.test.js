import { extractFormValues } from "../../../custom-form-hook/helper/extractFormValues";
import { requiredValidator, sampleFormStructure } from "./test-data";

describe("extactFromValues", () => {
    it("should return an object with only field values", () => {
        const formValues = extractFormValues(sampleFormStructure);
        expect(formValues).toEqual({
            username: "",
            email: "",
        });
    });

    it("should return undefined for empty values", () => {
        const formStructureWithUndefined = {
            username: { value: undefined, validators: [requiredValidator] },
        };
        const formValues = extractFormValues(formStructureWithUndefined);
        expect(formValues).toEqual({
            username: undefined,
        });
    });
})