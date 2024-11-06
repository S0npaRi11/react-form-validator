import { renderHook, act } from "@testing-library/react-hooks";
import useReactFormHandler from '../../../custom-form-hook/react-form-handler'
import { sampleFormStructure } from "./test-data";

describe("useReactFormHandler", () => {
    it("should initialize form values and errors correctly", () => {
        const { result } = renderHook(() => useReactFormHandler(sampleFormStructure));
        const [getValues, , errors] = result.current;

        expect(getValues()).toEqual({ username: "", email: "" });
        expect(errors).toEqual({
            username: { required: "username is required", minLength: "username must be at least 3 characters" },
            email: { required: "email is required" },
        });
    });

    it("should update form values and validate errors on handleForm", () => {
        const { result } = renderHook(() => useReactFormHandler(sampleFormStructure));
        const [, handleForm, errors] = result.current;

        act(() => {
            handleForm({ target: { name: "username", value: "John" } });
        });

        expect(result.current[0]()).toEqual({ username: "John", email: "" });
        expect(errors).toEqual({
            email: { required: "email is required" },
        });
    });

    it("should update form values and errors with patchValue", () => {
        const { result } = renderHook(() => useReactFormHandler(sampleFormStructure));
        const [, , errors, patchValue] = result.current;

        act(() => {
            patchValue({ username: "JohnDoe" });
        });

        expect(result.current[0]()).toEqual({ username: "JohnDoe", email: "" });
        expect(errors).toEqual({
            email: { required: "email is required" },
        });
    });
});