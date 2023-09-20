import { ValidationError } from "./error"

export class AnyValidator {
    a: any
    constructor(a: unknown) {
        this.a = a
    }

    eq(v: any): AnyValidator {
        if (v === this.a && typeof v === typeof this.a)
            return this
        throw new ValidationError(`Value ${v} is not equals to ${this.a}`)
    }
}