import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Globals } from 'src/app/global';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [Globals],
})
export class ContentModule { }
