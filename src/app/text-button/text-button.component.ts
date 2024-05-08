import { Component, Input, ViewChild } from '@angular/core';
import { PlayButtonComponent } from '../play-button/play-button.component';

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
  @ViewChild(PlayButtonComponent) childComponentRef!: PlayButtonComponent;


  click = () => {
    this.childComponentRef.click()
  }

  get isPlay(): boolean {
    return this.type === TextButtonComponentIcon.PLAY
  }

  get isDownload(): boolean {
    return this.type === TextButtonComponentIcon.DOWNLOAD
  }
}
