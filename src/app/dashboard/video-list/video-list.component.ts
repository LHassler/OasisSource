
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VideoData } from '../../video-data';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videos: VideoData[];

  @Output() videoSelected = new EventEmitter<VideoData>();

  selectedVideo;

  selectVideo(video) {
    this.selectedVideo = video;

    this.videoSelected.emit(video);

  }

}
