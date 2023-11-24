class Customer{
    constructor(private _firstName: string, private _lastName: string){
    }

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(firstName: string){
        this._firstName = firstName;
    }

    toString(){
        return this._firstName + " | " + this._lastName;
    }

}

let customer = new Customer("Vuong", "Phan");
console.log(customer.firstName);

