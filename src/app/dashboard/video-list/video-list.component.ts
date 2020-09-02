import { Component, OnInit } from '@angular/core';
import { videoData } from '../../video-data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  videos = videoData;

  selectedVideo;

  constructor() {}

  ngOnInit(): void {}

  selectVideo(video) {
    this.selectedVideo = video;
  }
}
