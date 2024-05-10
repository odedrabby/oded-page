import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { seasonsName, seasonsPath, springName, springPath } from '../../assets/strings';

export const playPause = "playPause"

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {
  @ViewChild("player") playerRef!: ElementRef<HTMLAudioElement>
  private _percent = 0
  isPlaying: boolean = false
  newTime = 0
  private _mouseIsUp = true

  private _messageSubscription!: Subscription;

  private currentTimeListener: (() => void) | undefined;

  constructor(private ss: SharedService) { }

  ngOnInit() {
    this._messageSubscription = this.ss.message$.subscribe(this.handleEvent);
  }

  ngAfterViewInit() {
    this.playerRef.nativeElement.src = seasonsPath

    const audioElement = this.playerRef.nativeElement;

    this.currentTimeListener = () => {
      this.onCurrentTimeChange();
    };

    audioElement.addEventListener('timeupdate', this.currentTimeListener);

  }

  ngOnDestroy() {
    this._messageSubscription.unsubscribe()

    if (this.currentTimeListener) {
      const audioElement = this.playerRef.nativeElement;
      audioElement.removeEventListener('timeupdate', this.currentTimeListener);
    }
  }

  onCurrentTimeChange() {
    if (this.playerRef.nativeElement.currentTime === this.playerRef.nativeElement.duration) {
      this.pause()
      this.playerRef.nativeElement.currentTime = 0
    }

    if (this._mouseIsUp) this.percent = this.playerRef.nativeElement.currentTime;
  }

  set percent(time: number) {
    this._percent = time / this.playerRef.nativeElement.duration * 100
  }

  get percent() {
    return this._percent
  }

  handleEvent = (msg: string) => {
    switch (msg) {
      case seasonsName:
        this.loadTrack(seasonsPath)
        break
      case springName:
        this.loadTrack(springPath)
        break
      case playPause:
        this.playPause()
        break
    }
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

  pause = () => {
    if (!this.playerRef) return
    this.playerRef.nativeElement.pause()
    this.isPlaying = false
  }

  loadTrack = (src: string) => {
    if (!this.playerRef) return
    this.playerRef.nativeElement.src = src
    this.play()
  }

  seek = (percent: number) => {
    this.newTime = this.playerRef.nativeElement.duration * (percent / 100)
    this.percent = this.newTime
  }

  seekEnd = (isEnded: boolean) => {
    if (isEnded) {
      this._mouseIsUp = true
      this.playerRef.nativeElement.currentTime = this.newTime
    }
    else {
      this._mouseIsUp = false
    }
  }

}
