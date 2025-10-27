export interface CreateCustomerModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    addresses?: Address[];
}

export interface Address {
    city:string;
    street:string;
}