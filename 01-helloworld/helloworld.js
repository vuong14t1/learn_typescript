"use strict";
class Customer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    toString() {
        return this._firstName + " | " + this._lastName;
    }
}
let customer = new Customer("Vuong", "Phan");
console.log(customer.firstName);
