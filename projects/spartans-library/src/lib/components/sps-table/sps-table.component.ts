import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Column } from '../../interfaces/lib.interfaces';

@Component({
  selector: 'sps-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './sps-table.component.html',
  styleUrl: './sps-table.component.css',
})
export class SpsTableComponent {
  @Input() public items!: object[];
  @Input() public cols!: Column[];
}
