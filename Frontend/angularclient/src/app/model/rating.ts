import { Content } from "./content";
import { User } from "./user";

export class Rating {
    id: number = 0;
    user: User = new User;
    content: Content = new Content;
    rating: number = 0;
}
