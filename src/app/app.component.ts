import { Component } from '@angular/core';
import { seasonsLyrics, seasonsName, springLyrics, springName } from '../assets/strings';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'GalsLandingPage';

    seasonsName = seasonsName
    seasonsLyrics = seasonsLyrics
    seasonsWidth = 120
    seasonsPath = 'assets/text.txt'
    
    springName = springName
    springWidth = 220
    springLyrics = springLyrics
    springPath = 'assets/text.txt'
}
