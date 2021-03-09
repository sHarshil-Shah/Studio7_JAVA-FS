import { User } from "./user";

export class Content {
    id: number = 0;
    name: string | undefined;
    discription: string | undefined;
    genere: string = "";
    rating: Number | undefined;
    language: string = '';
    trailer: string | undefined;
    contentLink: string = '';

    movie: boolean = true;
    cast: string | undefined;
    histUsers: User[] | undefined;
    watchUsers: User[] | undefined;

}
