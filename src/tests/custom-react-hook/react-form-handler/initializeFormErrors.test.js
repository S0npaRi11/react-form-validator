import { initialzeFormErrors } from "../../../custom-form-hook/react-form-handler";
// import { describe, it, expect } from 'jest'
import { minLengthValidator, requiredValidator, sampleFormStructure } from "./test-data";

describe("initializeFormErrors", () => {
    it("should return errors for invalid form structure", () => {
        const errors = initialzeFormErrors(sampleFormStructure)
        expect(errors).toEqual({
            username: {required: "username is required", minLength: "username must be at least 3 characters"},
            email: {required: "email is required"}
        })
    })

    it("should return an empty object for valid form structure", () => {
        const validFormStructure = {
            username: { value: "John", validators: [requiredValidator, minLengthValidator] },
            email: { value: "john@example.com", validators: [requiredValidator] },
        };
        const errors = initialzeFormErrors(validFormStructure);
        expect(errors).toEqual({});
    });
})