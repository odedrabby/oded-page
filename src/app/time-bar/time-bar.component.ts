import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, RendererFactory2, ViewChild } from '@angular/core';

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrl: './time-bar.component.scss'
})
export class TimeBarComponent {
  @Input() percent!: number
  @Output() dotEvent = new EventEmitter<number>();
  @ViewChild("bar") bar?: ElementRef<HTMLDivElement>

  private renderer: Renderer2;
  isDown = false

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // TODO check on normal page
    this.sendPercent(e.x)
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    this.sendPercent(e.touches[0].clientX)
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd() {
    this.handleUp()
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    this.handleUp()
  }

  private sendPercent(mouseX: number) {
    if (!this.isDown || !this.bar) return

    const rect = this.bar.nativeElement.getBoundingClientRect();

    const screen = this.getScreenWidth()
    const offset = (screen - rect.width) / 2

    const newX = clamp(mouseX - offset, 0, rect.width)

    const localPercent = newX * 100 / rect.width

    this.dotEvent.emit(localPercent);
  }

  getLeft = (percent: number): string => {
    if (!this.bar || !percent) {
      return '0'
    }
    const rect = this.bar.nativeElement.getBoundingClientRect();

    const newX = rect.width / 100 * percent
    return `${newX}px`;
  }

  private getScreenWidth() {
    return this.renderer.selectRootElement(window).innerWidth;
  }

  handleUp() {
    this.isDown = false
  }

  mousedown = () => {
    this.isDown = true
  }
}

