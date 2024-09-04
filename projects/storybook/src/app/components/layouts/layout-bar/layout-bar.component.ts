import { Component } from '@angular/core';
import { SpsInputSearchComponent } from 'spartansLibrary';
import { LayoutListComponent } from '../layout-list/layout-list.component';
import { LayoutTreeComponent } from '../layout-tree/layout-tree.component';

@Component({
  selector: 'app-layout-bar',
  standalone: true,
  imports: [SpsInputSearchComponent, LayoutListComponent, LayoutTreeComponent],
  templateUrl: './layout-bar.component.html',
  styleUrl: './layout-bar.component.scss',
})
export class LayoutBarComponent {
  public isSearching!: boolean;
  public minText: number;

  constructor() {
    this.minText = 3;
  }

  public onChangeText(event: string | null): void {
    if (event && event.length >= this.minText) {
      this.isSearching = true;
      console.log('onChangeText', event);
    } else {
      this.isSearching = false;
    }
  }
}
