import { min } from "../../../custom-form-hook/validators/min";

describe("min validator", () => {
    let minValidator;

    beforeEach(() => {
        minValidator = min(10); // Set the minimum required value to 10 for testing
    });

    it("should return valid when the value is equal to the minimum", () => {
        const result = minValidator("testField", 10);
        expect(result).toEqual({
            message: "",
            name: "min",
            isValid: true,
        });
    });

    it("should return valid when the value is greater than the minimum", () => {
        const result = minValidator("testField", 15);
        expect(result).toEqual({
            message: "",
            name: "min",
            isValid: true,
        });
    });

    it("should return invalid when the value is less than the minimum", () => {
        const result = minValidator("testField", 5);
        expect(result).toEqual({
            message: "testField value can't be less than 10",
            name: "min",
            isValid: false,
        });
    });

    it("should throw an error if the value is not a number", () => {
        expect(() => {
            minValidator("testField", "notANumber");
        }).toThrow("Min validator requires value to be a number");
    });

    it("should throw an error if the value is undefined", () => {
        expect(() => {
            minValidator("testField", undefined);
        }).toThrow("Min validator requires value to be a number");
    });
});
