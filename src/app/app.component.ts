import { Component } from '@angular/core';
import { seasonsLyrics } from '../assets/strings';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'GalsLandingPage';
    seasonsName = "עונות"
    seasonsLyrics = seasonsLyrics
}
