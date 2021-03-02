import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AccountComponent } from './account/account.component';
import { Globals } from 'src/app/global';

@NgModule({
  declarations: [AddComponent, ListComponent, LoginComponent, AccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule, FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [ Globals ],
})
export class UserModule { }