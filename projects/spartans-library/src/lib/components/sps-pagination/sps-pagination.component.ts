import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'sps-pagination',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './sps-pagination.component.html',
  styleUrl: './sps-pagination.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class SpsPaginationComponent {
  public first: number;
  public rows: number;
  public page: number;
  public totalRecords: number;

  constructor() {
    this.first = 0;
    this.page = 1;
    this.rows = 10;
    this.totalRecords = 120;
  }

  public onPageChange(event: PaginatorState): void {
    this.page = event.page ? event.page : this.page;
    this.first = event.first ? event.first : 0;
    this.rows = event.rows ? event.rows : this.rows;
  }
}
