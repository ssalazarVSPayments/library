import {
  Component,
  EventEmitter,
  Input,
  NO_ERRORS_SCHEMA,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'sps-pagination',
  standalone: true,
  imports: [ReactiveFormsModule, PaginatorModule],
  templateUrl: './sps-pagination.component.html',
  styleUrl: './sps-pagination.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class SpsPaginationComponent implements OnInit {
  public first: number;
  @Input() public rows: number;
  public page: number;
  @Input() public totalRecords: number;
  public pageCount: number;
  public inputPage: FormControl;
  @Output() public readonly changePage: EventEmitter<PaginatorState> =
    new EventEmitter<PaginatorState>();
  @Input() public filled: boolean;

  constructor() {
    this.inputPage = new FormControl(1);
    this.filled = false;
    this.first = 1;
    this.page = 1;
    this.rows = 10;
    this.totalRecords = 120;
    this.pageCount = this.totalRecords / this.rows;
  }

  public onPageChange(event: PaginatorState): void {
    this.page = event.page ? event.page + 1 : 1;
    this.first = event.first ? event.first + 1 : 1;
    this.rows = event.rows ? event.rows : this.rows;
    this.pageCount = event.pageCount ? event.pageCount : this.pageCount;

    this.changePage.emit({
      page: this.page,
      first: this.first,
      rows: this.rows,
      pageCount: this.pageCount,
    });
    this.inputPage.setValue(this.page);
  }

  public ngOnInit(): void {
    this.inputPage.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((newValue: number) => {
        if (newValue < 1 || newValue > this.pageCount) {
          return;
        }
        if (newValue != this.page) {
          const pagState: PaginatorState = {
            page: newValue - 1,
            first: (newValue - 1) * this.rows,
            rows: this.rows,
          };
          this.onPageChange(pagState);
        }
      });
  }
}
