import { requiredTrue } from "../../../custom-form-hook/validators/requiredTrue";

describe("requiredTrue validator", () => {
    let requiredTrueValidator;

    beforeEach(() => {
        requiredTrueValidator = requiredTrue(); // Initialize the requiredTrue validator for testing
    });

    it("should return valid when the value is true", () => {
        const result = requiredTrueValidator("testField", true);
        expect(result).toEqual({
            message: "",
            name: "requiredTrue",
            isValid: true,
        });
    });

    it("should return invalid when the value is false", () => {
        const result = requiredTrueValidator("testField", false);
        expect(result).toEqual({
            message: "testField has to be true",
            name: "requiredTrue",
            isValid: false,
        });
    });

    it("should return invalid when the value is undefined", () => {
        const result = requiredTrueValidator("testField", undefined);
        expect(result).toEqual({
            message: "testField has to be true",
            name: "requiredTrue",
            isValid: false,
        });
    });

    it("should return invalid when the value is null", () => {
        const result = requiredTrueValidator("testField", null);
        expect(result).toEqual({
            message: "testField has to be true",
            name: "requiredTrue",
            isValid: false,
        });
    });

    it("should return invalid when the value is a number", () => {
        const result = requiredTrueValidator("testField", 1);
        expect(result).toEqual({
            message: "testField has to be true",
            name: "requiredTrue",
            isValid: false,
        });
    });

    it("should return invalid when the value is a string", () => {
        const result = requiredTrueValidator("testField", "true");
        expect(result).toEqual({
            message: "testField has to be true",
            name: "requiredTrue",
            isValid: false,
        });
    });
});
