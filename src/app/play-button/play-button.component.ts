import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { playPause } from '../music-player/music-player.component';

@Component({
    selector: 'app-play-button',
    templateUrl: './play-button.component.html',
    styleUrl: './play-button.component.scss'
})
export class PlayButtonComponent {
    @Input() isPlaying?: boolean;
    @Input() songName?: string;
    iconSize?: number;

    constructor(private ss: SharedService) { }


    click = () => {
        if (this.songName) {
            this.ss.sendMessage(this.songName);
        } else {
            this.ss.sendMessage(playPause);
        }
    }
}
