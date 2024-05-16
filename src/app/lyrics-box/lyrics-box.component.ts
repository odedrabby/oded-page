import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lyrics-box',
  templateUrl: './lyrics-box.component.html',
  styleUrl: './lyrics-box.component.scss'
})
export class lyricsBoxComponent {
  @Input() lyrics: string[] = ["test"]

  isOpen: boolean = false

  toggle() {
    this.isOpen = !this.isOpen
  }
}
