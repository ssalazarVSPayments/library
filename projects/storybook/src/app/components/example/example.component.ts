import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { LayoutToolbarComponent } from '../layouts/layout-toolbar/layout-toolbar.component';
import { LayoutPanelComponent } from '../layouts/layout-panel/layout-panel.component';
import { LayoutBarComponent } from '../layouts/layout-bar/layout-bar.component';

@Component({
  selector: 'app-example',
  standalone: true,
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
  imports: [
    SplitterModule,
    LayoutToolbarComponent,
    LayoutPanelComponent,
    LayoutBarComponent,
  ],
})
export class ExampleComponent {}
