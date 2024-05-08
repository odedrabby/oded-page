import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss'
})
export class DownloadButtonComponent {
  @Input() height?: number;
  @Input() pathToFile?: string;
  @Input() fileName?: string;

  downloadFile() {
    if (!this.pathToFile || !this.fileName) return
    const link = document.createElement('a');
    link.href = this.pathToFile;
    link.download = this.fileName;
    link.click();
  }
}
