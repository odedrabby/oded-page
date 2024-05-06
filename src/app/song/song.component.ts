import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  @Input() songName: string = "songName"
  @Input() songLyrics: string[] = ["songLyrics"]
  @Input() isVideo?: boolean;
  
}
