import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { VideoComponent } from './video/video.component';
import { MatDialogModule } from '@angular/material/dialog';

import { VgCoreModule, } from '@videogular/ngx-videogular/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    VgCoreModule,

  ],
  entryComponents: [VideoComponent],
})
export class PagesModule { }
