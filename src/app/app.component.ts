import { Component } from '@angular/core';
import { discoLyrics, discoName, discoPath, linkTree, linkTreePath } from '../assets/strings';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    discoPath = discoPath
    discoName = discoName
    discoLyrics = discoLyrics
    discoWidth = 200
    linkTree = linkTree
    linkTreePath = linkTreePath

}
