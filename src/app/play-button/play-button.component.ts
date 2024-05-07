import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-play-button',
    templateUrl: './play-button.component.html',
    styleUrl: './play-button.component.scss'
})
export class PlayButtonComponent {
    @Output() onClick = new EventEmitter<string>();
    // @Input() handler?: (src: string) => void
    @Input() songName?: string;
    @Input() size?: number;
    iconSize?: number;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['size']) {
            this.iconSize = this.size ? this.size / 2 : 0;
        }
    }

    // TODO
    click = () => {
        this.onClick.emit(this.songName)
    }

    // TODO
    // callHandler() {
    //     this.handler && this.handler('')
    // }
}
