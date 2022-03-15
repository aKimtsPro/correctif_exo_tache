import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-control-error',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input()
  control!: AbstractControl;

  @Input()
  message?: string;

  @Input()
  error!: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
