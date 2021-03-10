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
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ExploreComponent } from './explore/explore.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [VideoComponent, DashboardComponent, ContentListComponent, WatchlistComponent, ExploreComponent, ProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    VgCoreModule,
    FlexLayoutModule, FormsModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    ReactiveFormsModule


  ], providers: [Globals],

  entryComponents: [VideoComponent],
})
export class PagesModule { }
