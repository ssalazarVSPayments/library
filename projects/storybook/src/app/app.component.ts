import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpsButtonComponent, SpsInputSearchComponent } from 'spartansLibrary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpsButtonComponent, SpsInputSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
