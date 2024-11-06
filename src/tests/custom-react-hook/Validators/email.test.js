import { email } from "../../../custom-form-hook/validators/email";
describe("email validator", () => {
    let emailValidator;

    beforeEach(() => {
        emailValidator = email();
    });

    it("should return valid for a correctly formatted email", () => {
        const result = emailValidator("email", "test@example.com");
        expect(result).toEqual({
            message: "",
            name: "email",
            isValid: true,
        });
    });

    it("should return invalid for an email missing '@'", () => {
        const result = emailValidator("email", "testexample.com");
        expect(result).toEqual({
            message: "email is not a valid email",
            name: "email",
            isValid: false,
        });
    });

    it("should return invalid for an email missing domain", () => {
        const result = emailValidator("email", "test@.com");
        expect(result).toEqual({
            message: "email is not a valid email",
            name: "email",
            isValid: false,
        });
    });

    it("should return invalid for an email missing local part", () => {
        const result = emailValidator("email", "@example.com");
        expect(result).toEqual({
            message: "email is not a valid email",
            name: "email",
            isValid: false,
        });
    });

    it("should return valid for an email with subdomains", () => {
        const result = emailValidator("email", "user@mail.example.com");
        expect(result).toEqual({
            message: "",
            name: "email",
            isValid: true,
        });
    });

    it("should return invalid for an email with special characters in domain", () => {
        const result = emailValidator("email", "user@example@com");
        expect(result).toEqual({
            message: "email is not a valid email",
            name: "email",
            isValid: false,
        });
    });

    it("should return invalid for an empty string", () => {
        const result = emailValidator("email", "");
        expect(result).toEqual({
            message: "email is not a valid email",
            name: "email",
            isValid: false,
        });
    });

    it("should return valid for a complex email with allowed characters", () => {
        const result = emailValidator("email", "user.name+123@example.com");
        expect(result).toEqual({
            message: "",
            name: "email",
            isValid: true,
        });
    });
});