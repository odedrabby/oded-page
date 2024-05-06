import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from '../letter/letter.component';
import { SongNameComponent } from '../song-name/song-name.component';
import { SongComponent } from '../song/song.component';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { lyricsBoxComponent } from '../lyrics-box/lyrics-box.component';
import { VideoBoxComponent } from '../video-box/video-box.component';



@NgModule({
    declarations: [
        LetterComponent,
        SongNameComponent,
        SongComponent,
        PlayButtonComponent,
        lyricsBoxComponent,
        VideoBoxComponent,
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
