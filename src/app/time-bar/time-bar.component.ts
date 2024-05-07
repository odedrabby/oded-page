import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2, RendererFactory2, ViewChild } from '@angular/core';
// import { Subscription } from 'rxjs';


function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrl: './time-bar.component.scss'
})
export class TimeBarComponent {
  @Output() dotEvent = new EventEmitter<number>();
  @ViewChild("bar") bar!: ElementRef<HTMLDivElement>
  
  private renderer: Renderer2;
  currentX = 0
  mouseX = 0
  isDown = false

  // private intervalSubscription!: Subscription; 
  // position = 0

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // ngOnInit() {
  //   this.intervalSubscription = interval(1000).subscribe(() => {
  //     this.position += 10;
  //   });
  // }

  // ngOnDestroy() {
  //   if (this.intervalSubscription) {
  //     this.intervalSubscription.unsubscribe(); // Clean up the subscription
  //   }
  // }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // TODO check on normal page
    this.mouseX = e.x
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    this.mouseX = e.touches[0].clientX
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd() {
   this.handleUp()
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
   this.handleUp()
  }

  handleUp() {
    if (this.isDown) {
      const rect = this.bar.nativeElement.getBoundingClientRect();
 
       const percent = this.currentX * 100 / rect.width
       this.dotEvent.emit(percent);
 
     }
    this.isDown = false
  }

  getTransform = (): string => {
    if (!this.isDown) {
      return `${this.currentX}px`;
    }
    
    const screen = this.getScreenWidth()

    const rect = this.bar.nativeElement.getBoundingClientRect();

    const p = (screen - rect.width) / 2
    
    this.currentX = clamp(this.mouseX - p, 0 ,rect.width)
    
    return `${this.currentX}px`;
  }

  private getScreenWidth() {
    return this.renderer.selectRootElement(window).innerWidth;
  }

  mousedown = () => {
      this.isDown = true
  }
}

