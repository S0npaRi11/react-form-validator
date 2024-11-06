import { minLength } from "../../../custom-form-hook/validators/minLength";

describe("minLength validator", () => {
    let minLengthValidator;

    beforeEach(() => {
        minLengthValidator = minLength(5); // Set minimum required length to 5 for testing
    });

    it("should throw an error if the length parameter is not a number", () => {
        expect(() => {
            minLength("notANumber");
        }).toThrow("minLength requires number as an input");
    });

    it("should return valid when the value length is equal to the minimum", () => {
        const result = minLengthValidator("testField", "12345");
        expect(result).toEqual({
            message: "",
            name: "minLength",
            isValid: true,
        });
    });

    it("should return valid when the value length is greater than the minimum", () => {
        const result = minLengthValidator("testField", "123456");
        expect(result).toEqual({
            message: "",
            name: "minLength",
            isValid: true,
        });
    });

    it("should return invalid when the value length is less than the minimum", () => {
        const result = minLengthValidator("testField", "123");
        expect(result).toEqual({
            message: "testField value has to be at least of length 5",
            name: "minLength",
            isValid: true,
        });
    });

    it("should throw an error if the value does not have a length property", () => {
        expect(() => {
            minLengthValidator("testField", 12345); // Pass a number instead of a string or array
        }).toThrow("minLength validator only works with types that have numeric length property");
    });

    it("should throw an error if the value is undefined", () => {
        expect(() => {
            minLengthValidator("testField", undefined);
        }).toThrow("minLength validator only works with types that have numeric length property");
    });
});
