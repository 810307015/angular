import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const el = this.el;
    el.nativeElement.style.background = 'gold';
    el.nativeElement.style.color = 'green';
    el.nativeElement.style.textAlign = 'center';
    el.nativeElement.innerHTML = new Date().toTimeString();
  }
}
