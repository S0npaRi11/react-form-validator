import { max } from "../../../custom-form-hook/validators/max";
describe("max validator", () => {
    let maxValidator;

    beforeEach(() => {
        maxValidator = max(10); // set the maximum allowed value to 10 for testing
    });

    it("should return valid when the value is equal to the maximum", () => {
        const result = maxValidator("testField", 10);
        expect(result).toEqual({
            message: "",
            name: "max",
            isValid: true,
        });
    });

    it("should return valid when the value is less than the maximum", () => {
        const result = maxValidator("testField", 5);
        expect(result).toEqual({
            message: "",
            name: "max",
            isValid: true,
        });
    });

    it("should return invalid when the value is greater than the maximum", () => {
        const result = maxValidator("testField", 15);
        expect(result).toEqual({
            message: "testField value can't be greater than 10",
            name: "max",
            isValid: false,
        });
    });

    it("should throw an error if the value is not a number", () => {
        expect(() => {
            maxValidator("testField", "notANumber");
        }).toThrow("Max validator requires value to be a number");
    });

    it("should throw an error if the value is undefined", () => {
        expect(() => {
            maxValidator("testField", undefined);
        }).toThrow("Max validator requires value to be a number");
    });
});