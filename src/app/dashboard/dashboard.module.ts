import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

let routes: Routes = [
  {
    path: '',
    component: VideoDashboardComponent,
  },
];

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoPlayerComponent,
    StatFiltersComponent,
    VideoListItemComponent,
  ],

  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, HttpClientModule],

})
export class DashboardModule {}
