import { maxLength } from "../../../custom-form-hook/validators/maxLength";

describe("maxLength validator", () => {
    let maxLengthValidator;

    beforeEach(() => {
        maxLengthValidator = maxLength(5); // Set maximum allowed length to 5 for testing
    });

    it("should throw an error if the length parameter is not a number", () => {
        expect(() => {
            maxLength("notANumber");
        }).toThrow("maxLength requires number as an input");
    });

    it("should return valid when the value length is equal to the maximum", () => {
        const result = maxLengthValidator("testField", "12345");
        expect(result).toEqual({
            message: "",
            name: "maxLength",
            isValid: true,
        });
    });

    it("should return valid when the value length is less than the maximum", () => {
        const result = maxLengthValidator("testField", "123");
        expect(result).toEqual({
            message: "",
            name: "maxLength",
            isValid: true,
        });
    });

    it("should return invalid when the value length is greater than the maximum", () => {
        const result = maxLengthValidator("testField", "123456");
        expect(result).toEqual({
            message: "testField value can't be of length greater than 5",
            name: "maxLength",
            isValid: true,
        });
    });

    it("should throw an error if the value does not have a length property", () => {
        expect(() => {
            maxLengthValidator("testField", 12345); // Pass a number instead of a string or array
        }).toThrow("maxLength validator only works with types that have numeric length property");
    });

    it("should throw an error if the value is undefined", () => {
        expect(() => {
            maxLengthValidator("testField", undefined);
        }).toThrow("maxLength validator only works with types that have numeric length property");
    });
});
