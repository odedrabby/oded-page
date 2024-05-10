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
  @Output() dotMove = new EventEmitter<number>();
  @Output() dotMoveEnd = new EventEmitter<boolean>();
  @ViewChild("bar") bar?: ElementRef<HTMLDivElement>
  @ViewChild("dot") dot?: ElementRef<HTMLDivElement>

  private renderer: Renderer2;
  isDown = false

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
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
    if (!this.isDown || !this.bar || !this.dot) return

    this.dot.nativeElement.classList.add("halo")

    const rect = this.bar.nativeElement.getBoundingClientRect();

    const screen = this.getScreenWidth()
    const offset = (screen - rect.width) / 2

    const newX = clamp(mouseX - offset, 0, (rect.width))

    const localPercent = newX * 100 / rect.width

    this.dotMove.emit(localPercent);
  }

  getLeft = (percent: number): string => {
    if (!this.dot || !this.bar || !percent) {
      return '0'
    }
    const rect = this.bar.nativeElement.getBoundingClientRect();
    const dotRect = this.dot.nativeElement.getBoundingClientRect();
    const width = (rect.width - dotRect.width)

    const newX = (width) / 100 * percent
    return `${newX}px`;
  }

  private getScreenWidth() {
    return this.renderer.selectRootElement(window).innerWidth;
  }

  handleUp() {
    this.isDown = false
    this.dotMoveEnd.emit(true)

    this.dot?.nativeElement.classList.remove("halo")

  }

  mousedown = (e: PointerEvent) => {
    this.isDown = true
    this.sendPercent(e.x)
    this.dotMoveEnd.emit(false)
  }
}

