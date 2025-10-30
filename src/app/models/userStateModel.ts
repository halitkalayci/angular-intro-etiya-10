export interface UserState {
    isLoggedIn: boolean;
    user?: UserModel
}

// JWT'de neler dönüyor?
export interface UserModel {
    firstName: string;
    lastName: string;
    id: string;
}