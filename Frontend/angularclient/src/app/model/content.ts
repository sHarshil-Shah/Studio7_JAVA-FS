import { User } from "./user";

export class Content {
    id: Number | undefined;
    name: string | undefined;
    discription: string | undefined;
    genere: string | undefined;
    rating: Number | undefined;
    language: string | undefined;
    trailer: string | undefined;
    isMovie: boolean | undefined;
    cast: string | undefined;
    histUsers: User[] | undefined;
    watchUsers: User[] | undefined;;

}
