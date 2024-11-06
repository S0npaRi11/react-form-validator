import { empty } from "../../../custom-form-hook/validators/empty";
describe("empty validator", () => {
    let emptyValidator;

    beforeEach(() => {
        emptyValidator = empty();
    });

    it("should always return valid with an empty message and name", () => {
        const result = emptyValidator("anyField", "anyValue");

        expect(result).toEqual({
            message: "",
            name: "",
            isValid: true,
        });
    });

    it("should return valid regardless of input values", () => {
        const result1 = emptyValidator("testField", "");
        const result2 = emptyValidator("anotherField", "someValue");

        expect(result1).toEqual({
            message: "",
            name: "",
            isValid: true,
        });
        expect(result2).toEqual({
            message: "",
            name: "",
            isValid: true,
        });
    });
});