import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    static email: string = '';
    static country: string = '';
    static contries = ["India", "Australia", "USA"];
    static languages = ["Hindi", "English"];
    static generes = ["Action", "Drama"];
}