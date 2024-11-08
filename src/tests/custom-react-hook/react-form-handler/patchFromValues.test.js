import { patchFormValues } from "../../../custom-form-hook/helper/patchFormValues";

import { sampleFormStructure } from "./test-data";
describe("patchFormValues", () => {
    it("should update form values with patch values", () => {
        const patchedValues = patchFormValues(sampleFormStructure, { username: "JohnDoe" });
        expect(patchedValues.username.value).toBe("JohnDoe");
    });

    it("should not modify fields not included in the patch", () => {
        const patchedValues = patchFormValues(sampleFormStructure, { username: "JohnDoe" });
        expect(patchedValues.email.value).toBe("");
    });

    it("should handle invalid patch keys gracefully", () => {
        const patchedValues = patchFormValues(sampleFormStructure, { nonExistentField: "TestValue" });
        expect(patchedValues).toEqual(sampleFormStructure); // no changes expected
    });
});