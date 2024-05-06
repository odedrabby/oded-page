import { Component } from '@angular/core';
import { seasonsLyrics, springLyrics } from '../assets/strings';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'GalsLandingPage';

    seasonsName = "עונות"
    seasonsLyrics = seasonsLyrics
    seasonsWidth = 120
    
    springName = "כשלונו של האביב"
    springWidth = 220
    springLyrics = springLyrics
}
