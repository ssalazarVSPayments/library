import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonSpartanComponent } from 'spartansLibrary';
import { SearchSpartanComponent } from 'spartansLibrary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonSpartanComponent, SearchSpartanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
