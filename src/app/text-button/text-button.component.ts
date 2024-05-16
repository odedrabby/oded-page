import { Component, Input } from '@angular/core';

export enum TextButtonComponentIcon {
  PLAY,
  DOWNLOAD
}

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.scss'
})
export class TextButtonComponent {
  @Input() pathToFile?: string;
  @Input() fileName?: string;
  @Input() name?: string;
  @Input() height?: number;
  @Input() width?: number;
  @Input() type: TextButtonComponentIcon = TextButtonComponentIcon.PLAY

  get isPlay(): boolean {
    return this.type === TextButtonComponentIcon.PLAY
  }

  get isDownload(): boolean {
    return this.type === TextButtonComponentIcon.DOWNLOAD
  }
}
