import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from '../letter/letter.component';
import { TextButtonComponent } from '../text-button/text-button.component';
import { SongComponent } from '../song/song.component';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { lyricsBoxComponent } from '../lyrics-box/lyrics-box.component';
import { VideoBoxComponent } from '../video-box/video-box.component';
import { DownloadButtonComponent } from '../download-button/download-button.component';



@NgModule({
    declarations: [
        LetterComponent,
        TextButtonComponent,
        SongComponent,
        PlayButtonComponent,
        lyricsBoxComponent,
        VideoBoxComponent,
        DownloadButtonComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LetterComponent,
        SongComponent
    ]
})
export class BodyModule { }
