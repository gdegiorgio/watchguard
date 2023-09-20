import { describe, expect, it } from "bun:test"
import { StringValidator } from "../../lib/string"


describe("When using StringValidator", ()=>{
    describe("and creating a new instance ", () => {
        it("should throw an error if param in constructor is not a string", () => {
            expect(() => {new StringValidator(76)}).toThrow()
        })
        it("should return a new StringValidator if param in constructor is a string", () => {
            const stringValidator = new StringValidator("test")
            expect(stringValidator.s).toBe("test")
        })
    })
    describe("and validating email by calling email()", () => {
        it("should throw an error if s is not an email", () => {
            expect(()=>{new StringValidator("test@@example.com").email()}).toThrow()
        })
        it("should return the instance of String validator if s is a valid email", () => {
            const stringValidator = new StringValidator("test@example.com")
            expect(stringValidator.email()).toBe(stringValidator)
        })
    })
    describe("and validating ip address by calling ip()", () => {
        it("should throw an error if string is not an ipv4/ipv6 address", () => {
            expect(()=>{new StringValidator("127.0.1.a").ip()}).toThrow()
        })
        it("should return the instance of String validator data is a valid ipv4", () => {
            const stringValidator = new StringValidator("127.0.0.1")
            expect(stringValidator.ip()).toBe(stringValidator)
        })
        it("should return the instance of String validator data is a valid ipv6", () => {
            const stringValidator = new StringValidator("2001:db8:3333:4444:5555:6666:7777:8888")
            expect(stringValidator.ip()).toBe(stringValidator)
        })
    })
    describe("and validating maximum length by calling max()", () => {
        it("should throw an error if string length is more than max", () => {
            expect(()=>{new StringValidator("this is a test").max(5)}).toThrow()
        })
        it("should return the instance of String validator if length is less than max", () => {
            const stringValidator = new StringValidator("127")
            expect(stringValidator.max(5)).toBe(stringValidator)
        })
    })
    describe("and validating  length by calling length()", () => {
        it("should throw an error if string length is not equal to param", () => {
            expect(()=>{new StringValidator("this is a test").length(5)}).toThrow()
        })
        it("should return the instance of String validator if length is equal to param", () => {
            const stringValidator = new StringValidator("127")
            expect(stringValidator.length(3)).toBe(stringValidator)
        })
    })
    describe("and validating minimum length by calling min()", () => {
        it("should throw an error if string length is less than min", () => {
            expect(()=>{new StringValidator("test").min(5)}).toThrow()
        })
        it("should return the instance of String validator if length is more than min", () => {
            const stringValidator = new StringValidator("this is a test")
            expect(stringValidator.min(5)).toBe(stringValidator)
        })
    })
    describe("and validating alphanumerical string by calling alphanum()", () => {
        it("should throw an error if value is not alphanumerical", () => {
            expect(()=>{new StringValidator("test!").alphanum()}).toThrow()
        })
        it("should return the instance of String validator if value is alphanumerical", () => {
            const stringValidator = new StringValidator("th1s 1s 4 test")
            expect(stringValidator.alphanum()).toBe(stringValidator)
        })
    })
    describe("and validating string inclusion by calling includes()", () => {
        it("should throw an error if s not includes param", () => {
            expect(()=>{new StringValidator("test!").includes("t3st")}).toThrow()
        })
        it("should return the instance of String validator if param is the prefix of s", () => {
            const stringValidator = new StringValidator("th1s 1s 4 test")
            expect(stringValidator.includes("th1s")).toBe(stringValidator)
        })
        it("should return the instance of String validator if param is the suffix of s", () => {
            const stringValidator = new StringValidator("th1s 1s 4 test")
            expect(stringValidator.includes("test")).toBe(stringValidator)
        })
        it("should return the instance of String validator if param is included in s", () => {
            const stringValidator = new StringValidator("th1s 1s 4 test")
            expect(stringValidator.includes("1s")).toBe(stringValidator)
        })
    })
    describe("and validating with pattern by calling pattern()", () => {
        it("should throw an error if s doesn't match pattern", () => {
            expect(()=>{new StringValidator("132test123").pattern(/^test$/)}).toThrow()
        })
        it("should return the instance of String validator if s matches pattern", () => {
            const stringValidator = new StringValidator("<html>")
            expect(stringValidator.pattern(/<\/?[\w\s]*>|<.+[\W]>/)).toBe(stringValidator)
        })
    })
    describe("and validating url by calling url()", () => {
        it("should throw an error if s is not an url", () => {
            expect(()=>{new StringValidator("http:/test_test.com").url()}).toThrow()
        })
        it("should return the instance of String validator if s is a valid url", () => {
            const stringValidator = new StringValidator("https://example.com")
            expect(stringValidator.url()).toBe(stringValidator)
        })
    })
    
})