import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detailed-video',
  templateUrl: './detailed-video.component.html',
  styleUrls: ['./detailed-video.component.scss'],
})
export class DetailedVideoComponent {
  @Input() public videoData: any;
  @Output() public notDetailedView = new EventEmitter<string>();
  constructor(private sanitizer: DomSanitizer) { }

  sanitizedVideoUrl(videoId: string){
    let unsanitizedUrl = 'https://www.youtube.com/embed/' + videoId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsanitizedUrl);
  }
  sendNotDetaileView(){
    this.notDetailedView.emit('out');
  }
}
