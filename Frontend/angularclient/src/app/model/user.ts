import { Content } from "./content";

export class User {
    id: Number | undefined;
    email: string | undefined;
    pass: string | undefined;
    country: string | undefined;
    admin: boolean | undefined;
    history: Content[] | undefined;
    watchList: Content[] | undefined;
}