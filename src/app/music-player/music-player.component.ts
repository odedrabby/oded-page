import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {
  @ViewChild("player") playerRef?: ElementRef<HTMLAudioElement>
  player: HTMLAudioElement = {  } as HTMLAudioElement
  isPlaying: boolean = false

  ngAfterViewInit() {
    if (!this.playerRef) return
    this.player = this.playerRef?.nativeElement
    this.player.src = "assets/seasons.mp3"
    this.player.load()
  }

  playPause = () => {
    this.isPlaying ? this.player.pause() : this.player.play()
    this.isPlaying = !this.isPlaying
  }

  play = () => {
    this.player.play()
    this.isPlaying = true
  }

  loadTrack = (src: string) => {
    this.player.src = src
    this.player.load()
    this.play()
  }

}
