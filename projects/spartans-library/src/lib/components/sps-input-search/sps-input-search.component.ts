import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'sps-input-search',
  standalone: true,
  imports: [
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sps-input-search.component.html',
  styleUrl: './sps-input-search.component.css',
})
export class SpsInputSearchComponent implements OnInit {
  public inputText: FormControl<string | null>;
  @Input() public inputLabel!: string;
  @Output() public readonly changeText: EventEmitter<string | null>;

  constructor() {
    this.inputText = new FormControl<string>('');
    this.changeText = new EventEmitter<string | null>();
  }

  public ngOnInit(): void {
    this.inputText.valueChanges.subscribe((value: string | null) => {
      this.changeText.emit(value);
    });
  }
}
