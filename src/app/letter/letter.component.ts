import { Component } from '@angular/core';
import { discoName, discoPath, introParagraph, introTitle, pathToCover } from '../../assets/strings';
import { TextButtonComponentIcon } from '../text-button/text-button.component';

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
    downloadButton = TextButtonComponentIcon.DOWNLOAD
    discoPath = discoPath
    discoName = discoName


}
