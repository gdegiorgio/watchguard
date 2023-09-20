import { ValidationError } from "./error"

export function stringValidator(s:any):boolean{
    if(typeof s == "string")
        return true
    throw new ValidationError(`${s} is not a string`)
}

export function containsValidator(x:string, y:string ) :boolean{
    if(y.includes(x))
        return true
    throw new ValidationError(`${x} could not be found in ${y}`)
}

export function lengthValidator(s:string, l:number): boolean{
    if(s.length == l)
        return true
    else
        throw new ValidationError(`Length of ${s} is not ${l}`)
}

export function emailValidator(s:string) : boolean{
    const regexp :RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regexp.test(s))
        return true
    throw new ValidationError(`${s} is not a valid email`)
}

export function ipValidator(s:string): boolean{
    const ipv4 :RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    const ipv6 : RegExp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,7}:[0-9a-fA-F]{1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}(:|$))|^(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}(:|$))|^(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}(:|$))|^(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}(:|$))|^([0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})?)$/;
    if(ipv4.test(s) || ipv6.test(s))
        return true
    throw new ValidationError(`${s} is not a valid ipv4/ipv6 address`)
}

export function minValidator(s:string, m:number): boolean {
    if(s.length >= m)
        return true
        throw new ValidationError(`Minimum length of ${s} should be ${m}`)
    }

export function maxValidator(s:string, m:number): boolean {
    if(s.length <= m)
        return true
    throw new ValidationError(`Max length of ${s} should be ${m}`)
}

export function alphanumValidator(s:string):boolean{
    const regexp :RegExp = /^[a-zA-Z0-9\s]+$/;
    if(regexp.test(s))
        return true
    throw new ValidationError(`${s} is not alphanumeric`)
}

export function regexpValidator(s:string, r:RegExp){
    if(r.test(s))
        return true
    throw new ValidationError(`${s} could not be match ${r}`)
}
