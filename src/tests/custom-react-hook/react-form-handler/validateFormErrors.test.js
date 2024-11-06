import { validateFormErrors } from "../../../custom-form-hook/react-form-handler";
import { sampleFormStructure } from "./test-data";

describe("validateFormErrors", () => {
    it("should return error for invalid values", () => {
        let currentErrors = {}
        for(let name in sampleFormStructure){
            const formElement = sampleFormStructure[name]
            currentErrors = validateFormErrors(name, formElement.value, formElement.validators, currentErrors)
        }

        expect(currentErrors).toEqual({
            username: {
                required: "username is required",
                minLength: "username must be at least 3 characters"
            },
            email: {
                required: 'email is required'
            }
        })
    })

    it("should clear specific error when field becomes valid", () => {
        const currentErrors = {
            username: { required: "username is required", minLength: "username must be at least 3 characters" },
        };
        const errors = validateFormErrors("username", "John", sampleFormStructure.username.validators, currentErrors);
        expect(errors).toEqual({});
    });

    it("should only update specified field errors", () => {
        const currentErrors = {
            email: { required: "email is required" },
        };
        const errors = validateFormErrors("username", "", sampleFormStructure.username.validators, currentErrors);
        expect(errors).toEqual({
            username: { required: "username is required", minLength: "username must be at least 3 characters" },
            email: { required: "email is required" },
        });
    });
})