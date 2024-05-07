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
    this.playerRef.nativeElement.src = seasonsPath
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

  loadTrack = (src: string) => {
    if (!this.playerRef) return
    this.playerRef.nativeElement.src = src
    this.play()
  }

  seek = (percent: number) => {
    if (!this.playerRef) return

    const newTime = this.playerRef.nativeElement.duration * (percent / 100)
    this.playerRef.nativeElement.currentTime = newTime
  }

}
