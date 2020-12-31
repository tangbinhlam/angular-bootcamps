import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-bootcamps';
  name = '';

  onNameChange(value: string) {
    this.name = value;
  }
}
