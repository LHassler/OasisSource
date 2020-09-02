import {Component, OnInit, Output} from '@angular/core';
import {VideoData, videoData} from '../../video-data';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  videoList = videoData;


  currentVideo: VideoData;

  constructor() {}

  ngOnInit(): void {}

  currentVideoSelected(video: VideoData) {
    this.currentVideo = video;
  }
}
