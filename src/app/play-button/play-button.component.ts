import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-play-button',
    templateUrl: './play-button.component.html',
    styleUrl: './play-button.component.scss'
})
export class PlayButtonComponent {
    @Input() size?: number;

    ngAfterViewInit() {
        console.log(this.size)
    }

}
