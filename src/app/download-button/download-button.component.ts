import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss'
})
export class DownloadButtonComponent {
  @Input() pathToFile?: string;
  @Input() fileName?: string;
  @Input() size?: number;
  iconSize?: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['size']) {
      this.iconSize = this.size ? this.size : 0;
    }
  }

  downloadFile() {
    if (!this.pathToFile || !this.fileName) return
    const link = document.createElement('a');
    link.href = this.pathToFile;
    link.download = this.fileName;
    link.click();
  }
}
