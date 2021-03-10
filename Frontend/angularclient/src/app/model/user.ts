import { Content } from "./content";

export class User {
    id: number = 0;
    email: string | undefined;
    pass: string | undefined;
    country: string | undefined;
    admin: boolean | undefined;
    history: Content[] | undefined;
    watchList: Content[] | undefined;
}