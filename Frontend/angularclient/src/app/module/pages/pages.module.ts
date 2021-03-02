import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { VideoComponent } from './video/video.component';
import { MatDialogModule } from '@angular/material/dialog';

import { VgCoreModule, } from '@videogular/ngx-videogular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentListComponent } from './content-list/content-list.component';
import { Globals } from 'src/app/global';

@NgModule({
  declarations: [DashboardComponent, ContentListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    VgCoreModule,
    FlexLayoutModule,

  ], providers: [Globals],

  entryComponents: [VideoComponent],
})
export class PagesModule { }
