import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from '../letter/letter.component';
import { TextButtonComponent } from '../text-button/text-button.component';
import { SongComponent } from '../song/song.component';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { lyricsBoxComponent } from '../lyrics-box/lyrics-box.component';
import { VideoBoxComponent } from '../video-box/video-box.component';
import { DownloadButtonComponent } from '../download-button/download-button.component';
import { ShowComponent } from '../show/show.component';
import { MusicPlayerComponent } from '../music-player/music-player.component';
import { TimeBarComponent } from '../time-bar/time-bar.component';
import { SocialComponent } from '../social/social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
    declarations: [
        LetterComponent,
        TextButtonComponent,
        SongComponent,
        PlayButtonComponent,
        lyricsBoxComponent,
        VideoBoxComponent,
        DownloadButtonComponent,
        ShowComponent,
        MusicPlayerComponent,
        TimeBarComponent,
        SocialComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        LetterComponent,
        SongComponent,
        MusicPlayerComponent,
        ShowComponent,
        SocialComponent,
    ]
})
export class BodyModule { }
