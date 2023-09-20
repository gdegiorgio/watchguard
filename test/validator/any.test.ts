import { describe, expect, it } from "bun:test"
import { AnyValidator } from "../../lib/any"

describe("When using AnyValidator", () => {
    describe("and check if a and param are equals with eq()", () => {
        it("should throw an error if values are not equals", () => {
            expect(() => {new AnyValidator(5).eq("5")}).toThrow()
        })
        it("should return the same instance of AnyValidator if values are equals", () => {
            const anyValidator = new AnyValidator("5")
            expect(anyValidator.eq("5")).toBe(anyValidator)
        })
    })
})