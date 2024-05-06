import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss'
})
export class DownloadButtonComponent {
  @Input() size?: number;
  iconSize?: number;

  ngOnChanges(changes: SimpleChanges) {
      if (changes['size']) {
          this.iconSize = this.size ? this.size : 0;
      }
  }

}
