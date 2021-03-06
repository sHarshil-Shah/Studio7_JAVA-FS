import { Injectable } from '@angular/core';
import { Globals } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private links = new Array<{ text: string, path: string }>();
  private admin: boolean = false;
  private loggedIn: boolean = false;
  constructor(public globals: Globals) {
    this.addItem('Login', 'users/login');
  }
  getLinks() {
    return this.links;
  }

  getLoginStatus() {
    return this.loggedIn;
  }
  isAdmin() {
    return this.admin;
  }
  updateLoginStatus() {
    this.clearAllItems();
    this.addItem('Login', 'users/login');

  }

  updateNavAfterAuth(temp1: boolean): void {
    this.loggedIn = true;
    this.clearAllItems();
    this.admin = temp1;
    if (this.isAdmin()) {
      this.addItem('Add Content', 'contents/add');
      this.addItem('List Content', 'contents/list');
      this.addItem('Add User', 'users/add');
      this.addItem('List User', 'users/list');
    } else {
      this.addItem('Dashboard', 'pages/dashboard');
      this.addItem('My WatchList', 'pages/watchlist');

    }
    this.addItem('Log out', 'users/login');

  }

  addItem(text: string, path: string) {
    this.links.push({ text: text, path: path });
  }

  removeItem(text: string) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }

  clearAllItems() {
    this.links.length = 0;
  }
}
