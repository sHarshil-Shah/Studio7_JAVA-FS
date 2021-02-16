import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AddComponent, ListComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule, FormsModule, ReactiveFormsModule,
  ]
})
export class UserModule { }
