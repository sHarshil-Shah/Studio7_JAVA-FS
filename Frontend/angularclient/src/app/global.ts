import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    static userId: number = 0;
    static contentId: number = 0;
    static email: string = '';
    static country: string = '';
    static contries = ["India", "Australia", "USA"];
    static languages = ["Hindi", "English"];
    static generes = ["Action", "Drama"];
}