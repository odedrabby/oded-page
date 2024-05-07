import { Component, Input, SimpleChanges } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-play-button',
    templateUrl: './play-button.component.html',
    styleUrl: './play-button.component.scss'
})
export class PlayButtonComponent {
    @Input() songName?: string;
    @Input() size?: number;
    iconSize?: number;

    constructor(private ss: SharedService) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['size']) {
            this.iconSize = this.size ? this.size / 2 : 0;
        }
    }

    clickPlay = () => {
        if (!this.songName) return
        this.ss.sendMessage(this.songName);
    }
}
