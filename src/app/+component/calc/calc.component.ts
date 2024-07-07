import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  num1: string = '0';
  num2: string = '0';
  operator: string = '.';
  click(c: string) {
    this.operator = c;
    this.num1 = this.num2;
    this.num2 = '0';
  }
  digit(d: string) {
    this.num2 = Number(this.num2 + d).toString();
  }
  op() {
    if (this.operator === '+') {
      this.num2 = (Number(this.num1) + Number(this.num2)).toString();
    }
    else if (this.operator === '-') {
      this.num2 = (Number(this.num1) - Number(this.num2)).toString();
    }
    else if (this.operator === 'x') {
      this.num2 = (Number(this.num1) * Number(this.num2)).toString();
    }
    else if (this.operator === '÷') {
      this.num2 = (Number(this.num1) / Number(this.num2)).toString();
    }
    this.operator = '.';
    this.num1 = '0';
  }
}
