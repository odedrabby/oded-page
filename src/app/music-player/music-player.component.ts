import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { seasonsName, seasonsPath, springName, springPath } from '../../assets/strings';

export enum MusicPlayerActions {
  PLAY_SEASONS = "PLAY_SEASONS",
  PLAY_SPRING = "PLAY_SPRING",
}

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {
  @ViewChild("player") playerRef?: ElementRef<HTMLAudioElement>
  isPlaying: boolean = false

  private messageSubscription!: Subscription;
  
  constructor(private ss: SharedService) {}

  ngOnInit() {
    this.messageSubscription = this.ss.message$.subscribe(this.handleEvent);
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    if (!this.playerRef) return
    this.playerRef.nativeElement.src = "assets/seasons.mp3"
    // this.playerRef.nativeElement.load()
  }

  handleEvent = (msg: string) => {
    if (msg === seasonsName) this.loadTrack(seasonsPath)
    if (msg === springName) this.loadTrack(springPath)
  }

  playPause = () => {
    if (!this.playerRef) return
    this.isPlaying ? this.playerRef.nativeElement.pause() : this.playerRef.nativeElement.play()
    this.isPlaying = !this.isPlaying
  }

  play = () => {
    if (!this.playerRef) return
    this.playerRef.nativeElement.play()
    this.isPlaying = true
  }

  loadTrack = (src: string) => {
    if (!this.playerRef) return
    this.playerRef.nativeElement.src = src
    // this.playerRef.nativeElement.load()
    this.play()
  }

}
