import { AnyValidator } from "./any"
import { ValidationError } from "./error"

export class StringValidator extends AnyValidator {

    s: string

    constructor(s: unknown) {
        super(s)
        if (typeof s === "string")
            this.s = s
        else
            throw new ValidationError()
    }

    length(l: number): StringValidator {
        if (this.s.length === l)
            return this
        throw new ValidationError(`Minimum length of ${this.s} should be ${m}`)

    }

    min(m: number): StringValidator {
        if (this.s.length > m)
            return this
        throw new ValidationError(`Minimum length of ${this.s} should be ${m}`)
    }


    max(m: number): StringValidator {
        if (this.s.length < m)
            return this
        throw new ValidationError(`Maximum length of ${this.s} should be ${m}`)
    }


    email(): StringValidator {
        const regexp: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (regexp.test(this.s))
            return this
        throw new ValidationError(`${this.s} is not a valid email`)
    }

    ip(): StringValidator {
        const ipv4: RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        const ipv6: RegExp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,7}:[0-9a-fA-F]{1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}(:|$))|^(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}(:|$))|^(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}(:|$))|^([0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})?)$/;
        if (ipv4.test(this.s) || ipv6.test(this.s))
            return this
        throw new ValidationError(`${this.s} is not a valid ipv4/ipv6 address`)
    }

    alphanum(): StringValidator {
        const regexp: RegExp = /^[a-zA-Z0-9\s]+$/;
        if (regexp.test(this.s))
            return this
        throw new ValidationError(`${this.s} is not alphanumeric`)
    }

    includes(y: string): StringValidator {
        if (this.s.includes(y))
            return this
        throw new ValidationError(`There's no \"${y}\" in \"${this.s}\"`)
    }

    pattern(r: RegExp): StringValidator {
        if (r.test(this.s))
            return this
        throw new ValidationError(`${this.s} not matching ${r}`)
    }

    url(): StringValidator {
        const regexp: RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
        if (regexp.test(this.s))
            return this
        throw new ValidationError(`${this.s} is not an url`)
    }


}
