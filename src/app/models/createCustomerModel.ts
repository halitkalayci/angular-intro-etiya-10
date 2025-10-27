export interface CreateCustomerModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    addresses?: Address[];
}

interface Address {
    city:string;
    street:string;
}