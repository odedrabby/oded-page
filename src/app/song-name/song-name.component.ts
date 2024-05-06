import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-name',
  templateUrl: './song-name.component.html',
  styleUrl: './song-name.component.scss'
})
export class SongNameComponent {
  @Input() name: string = 'missing';
  @Input() size: number = 50;

  get iconRight(): string {
    return `${this.size / 10}px`
  }
}
