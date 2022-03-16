import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[priority-color]'
})
export class PriorityColorDirective implements OnInit {

  @Input('priority-color')
  priority!: 'bas' | 'moyen' | 'haut';

  constructor(private ref: ElementRef) {
  }

  ngOnInit(): void {
    switch(this.priority){
      case 'bas':
        console.log(this.ref)  
        this.ref.nativeElement.classList.add('low-priority')
        break;
      case 'moyen':
        this.ref.nativeElement.classList.add('medium-priority')
        break;
      case 'haut':
        this.ref.nativeElement.classList.add('high-priority')
        break;
    }
  }

  
}
