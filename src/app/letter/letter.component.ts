import { Component } from '@angular/core';
import { introParagraph, introTitle, pathToCover } from '../../assets/strings';

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrl: './letter.component.scss'
})
export class LetterComponent {
    readonly title = introTitle;
    readonly paragraph = introParagraph
    readonly path = pathToCover
    readonly width = '300px'
    readonly height = '300px'
}
