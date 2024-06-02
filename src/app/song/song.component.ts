import { Component, Input } from '@angular/core';
import { TextButtonComponentIcon } from '../text-button/text-button.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  @Input() pathToFile?: string;
  @Input() songNameWidth?: number;
  @Input() downloadText: string = "mp3"
  @Input() songName: string = "songName"
  @Input() songLyrics: string[] = ["songLyrics"]
  @Input() isVideo?: boolean = false;
  downloadButton = TextButtonComponentIcon.DOWNLOAD

}
