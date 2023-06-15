import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() total = new EventEmitter<number>();

  num1: number = 0;
  num2: number = 0;

  sumNumbers(): void {
    this.total.emit(this.num1 +  this.num2);
  }
}
