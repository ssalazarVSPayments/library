import { Component, EventEmitter, Input, Output } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

import {
  Column,
  TableSelectEvent,
  TableStatus,
} from '../../interfaces/lib.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sps-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    MenuModule,
    DividerModule,
    TagModule,
  ],
  templateUrl: './sps-table.component.html',
  styleUrl: './sps-table.component.css',
  providers: [provideAnimations()],
})
export class SpsTableComponent {
  @Input() public items!: object[];
  @Input() public cols!: Column[];
  @Input() public options!: string;
  @Output() public readonly optionSelect: EventEmitter<TableSelectEvent> =
    new EventEmitter<TableSelectEvent>();
  @Input() public statusSelector!: TableStatus;

  public labelAction: string;

  constructor() {
    this.options = '';
    this.labelAction = 'Acciones';
  }

  public onOptionSelect(rowData: object, event: MouseEvent): void {
    this.optionSelect.emit({ event, data: rowData });
  }
}
