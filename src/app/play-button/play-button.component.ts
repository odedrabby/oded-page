import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-play-button',
    templateUrl: './play-button.component.html',
    styleUrl: './play-button.component.scss'
})
export class PlayButtonComponent {
    @Input() size?: number;
    iconSize?: number;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['size']) {
            this.iconSize = this.size ? this.size / 2 : 0;
        }
    }
}
