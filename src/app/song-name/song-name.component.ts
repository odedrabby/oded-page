import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-name',
  templateUrl: './song-name.component.html',
  styleUrl: './song-name.component.scss'
})
export class SongNameComponent {
  @Input() name?: string = 'missoing';

}
