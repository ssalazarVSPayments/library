import { Component, OnInit } from '@angular/core';
import {
  NodeListItem,
  SpsAutocompleteListComponent,
  TooltipDirective,
} from 'spartansLibrary';

@Component({
  selector: 'app-layout-list',
  standalone: true,
  imports: [TooltipDirective, SpsAutocompleteListComponent],
  templateUrl: './layout-list.component.html',
  styleUrl: './layout-list.component.scss',
})
export class LayoutListComponent implements OnInit {
  public nodes!: NodeListItem[];

  public ngOnInit(): void {
    this.loadItems();
  }

  private loadItems(): void {
    this.nodes = [
      {
        name: 'Sucursal Centro',
        path: 'Inditex / Bershka',
        icon: 'pi-briefcase',
      },
      {
        name: 'Sucursal Centro 2',
        path: 'Inditex / Bershka',
        icon: 'pi-briefcase',
      },
      {
        name: 'Monterrey Centro TPV',
        path: 'Inditex / Zara / Sucursales / Centro / Sucursal Monterrey / Monterrey Centro PDV',
        icon: 'pi-briefcase',
      },
      {
        name: 'Sucursal Centro Norte',
        path: 'Inditex / Zara',
        icon: 'pi-briefcase',
      },
    ];
  }
}
