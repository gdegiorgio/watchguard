import { describe, expect, it, test } from "bun:test";
import { alphanumValidator, containsValidator, emailValidator, ipValidator, lengthValidator, maxValidator, minValidator, stringValidator } from "../lib/string";
import { ValidationError } from "../lib/error";

describe("When using string validator", ()=>{
    it("should fail when input is not string", () => {
        expect(() => {stringValidator(123)}).toThrow(new ValidationError("123 is not a string"))
    })
    it("should pass when input is a string", () => {
        expect(stringValidator("test")).toBe(true)
    })
})

describe("When using email validator", ()=>{
    it("should fail when input does not have @", () => {
        expect(() => {emailValidator("t3st.com")}).toThrow(new ValidationError("t3st.com is not a valid email"))
    })
    it("should fail when input is missing domain ", () => {
        expect(() => {emailValidator("t3st@")}).toThrow(new ValidationError("t3st@ is not a valid email"))
    })
    it("should pass when input is a valid email", () => {
        expect(emailValidator("test@test.com")).toBe(true)
    })
})

describe("When using ip address validator", ()=>{
    it("should fail when input is not a valid pv4/ipv6 address", () => {
        expect(() => {ipValidator("t3st.com.n0t.valid")}).toThrow(new ValidationError("t3st.com.n0t.valid is not a valid ipv4/ipv6 address"))
    })
    it("should pass when input is an ipv4 address ", () => {
        expect(ipValidator("127.0.0.1")).toBe(true)
    })
    it("should pass when input is a valid ipv6 address", () => {
        expect(ipValidator("127.0.0.1")).toBe(true)
    })
})

describe("When using contains validator", ()=>{
    it("should fail when first string is not included in the other one", () => {
        expect(() => {containsValidator("t3st", "this is a test")}).toThrow(new ValidationError("t3st could not be found in this is a test"))
    })
    it("should pass when first string is the prefix of the other one", () => {
        expect(containsValidator("test", "testing is awesome")).toBe(true)
    })
    it("should pass when first string is the suffix of the other one", () => {
        expect(containsValidator("test", "this is test")).toBe(true)
    })
    it("should pass when first string isincluded in the other one", () => {
        expect(containsValidator("test", "this test is awesome")).toBe(true)
    })
})

describe("When using length validator", ()=>{
    it("should fail when input length is not equal to expected", () => {
        expect(() => {lengthValidator("t3st", 5)}).toThrow(new ValidationError("Length of t3st is not 5"))
    })
    it("should pass when input length is equal to expected", () => {
        expect(lengthValidator("test", 4)).toBe(true)
    })
})


describe("When using min validator", ()=>{
    it("should fail when input length is less than expected", () => {
        expect(() => {minValidator("t3st", 5)}).toThrow(new ValidationError("Minimum length of t3st should be 5"))
    })
    it("should fail when input length is more than expected", () => {
        expect(minValidator("test", 2)).toBe(true)
    })
})

describe("When using max validator", ()=>{
    it("should fail when input length is more than expected", () => {
        expect(() => {maxValidator("t3st", 1)}).toThrow(new ValidationError("Max length of t3st should be 1"))
    })
    it("should fail when input length is less than expected", () => {
        expect(maxValidator("test", 7)).toBe(true)
    })
})

describe("When using alphanumeric validator", ()=>{
    it("should fail when input is not alphanumeric", () => {
        expect(() => {alphanumValidator("t3st-!?")}).toThrow(new ValidationError("t3st-!? is not alphanumeric"))
    })
    it("should pass when input is alphanumeric", () => {
        expect(alphanumValidator("Th1s 1s 4 t3st")).toBe(true)
    })
})