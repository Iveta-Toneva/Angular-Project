import { Caricature } from "../catalouge/caricature";

export interface User {
    email: string,
    username: string,
    password: string,
    accessToken: string,
    _id: string,
    wishList: Caricature[]
}