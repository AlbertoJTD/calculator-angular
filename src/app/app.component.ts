import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';
  mainResult: number = 0;

  showTotal(result: number): void {
    this.mainResult = result;
  }
}
