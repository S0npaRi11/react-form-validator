import { pattern } from "../../../custom-form-hook/validators/pattern";

describe("pattern validator", () => {
    let patternValidator;

    beforeEach(() => {
        patternValidator = pattern(/^[a-zA-Z]+$/); // Set pattern to only allow alphabetic characters for testing
    });

    it("should return valid when the value matches the pattern", () => {
        const result = patternValidator("testField", "ValidInput");
        expect(result).toEqual({
            isValid: true,
            name: "pattern",
            message: "",
        });
    });

    it("should return invalid when the value does not match the pattern", () => {
        const result = patternValidator("testField", "12345");
        expect(result).toEqual({
            isValid: false,
            name: "pattern",
            message: "testField is not in the specified pattern",
        });
    });

    it("should handle special characters that do not match the pattern", () => {
        const result = patternValidator("testField", "@#!$");
        expect(result).toEqual({
            isValid: false,
            name: "pattern",
            message: "testField is not in the specified pattern",
        });
    });

    it("should handle an empty string correctly when it doesn't match the pattern", () => {
        const result = patternValidator("testField", "");
        expect(result).toEqual({
            isValid: false,
            name: "pattern",
            message: "testField is not in the specified pattern",
        });
    });

    it("should throw an error if the pattern is not a valid regular expression", () => {
        expect(() => {
            pattern("invalidPattern")("testField", "anyValue");
        }).toThrow(TypeError);
    });
});
