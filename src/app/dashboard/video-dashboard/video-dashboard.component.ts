import { Component, OnInit } from '@angular/core';
import { VideoData } from '../../video-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  videoList;

  currentVideo: VideoData;

  constructor(httpClient: HttpClient) {
    httpClient
      .get('https://api.angularbootcamp.com/videos')
      .subscribe((videoList) => {
        this.videoList = videoList;
      });
  }

  ngOnInit(): void {}

  currentVideoSelected(video: VideoData) {
    this.currentVideo = video;
  }
}
