import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-layout-panel',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './layout-panel.component.html',
  styleUrl: './layout-panel.component.scss',
})
export class LayoutPanelComponent implements OnInit {
  public items: MenuItem[] | undefined;

  public ngOnInit(): void {
    this.items = [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
      { label: 'Tab 4' },
      { label: 'Tab 5' },
      { label: 'Tab 6' },
      { label: 'Tab 7' },
      { label: 'Tab 8' },
      { label: 'Tab 9' },
    ];
  }
}
