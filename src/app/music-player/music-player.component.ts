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
  percent = 0
  isPlaying: boolean = false

  private messageSubscription!: Subscription;

  private currentTimeListener: (() => void) | undefined;

  constructor(private ss: SharedService) { }

  ngOnInit() {
    this.messageSubscription = this.ss.message$.subscribe(this.handleEvent);
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
    this.messageSubscription.unsubscribe()

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

    const currentTime = this.playerRef.nativeElement.currentTime;
    this.percent = currentTime / this.playerRef.nativeElement.duration * 100
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
    const newTime = this.playerRef.nativeElement.duration * (percent / 100)
    this.playerRef.nativeElement.currentTime = newTime
  }

}
