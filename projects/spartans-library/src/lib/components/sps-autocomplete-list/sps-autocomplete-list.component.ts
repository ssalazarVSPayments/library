import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { NodeListItem } from '../../interfaces/lib.interfaces';

@Component({
  selector: 'sps-autocomplete-list',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './sps-autocomplete-list.component.html',
  styleUrl: './sps-autocomplete-list.component.scss',
})
export class SpsAutocompleteListComponent {
  @Input() public nodes!: NodeListItem[];
  @Input() public totalNodes!: number;
  @Input() public showNodes!: number;

  @Output() private readonly nodeSelect: EventEmitter<NodeListItem> =
    new EventEmitter<NodeListItem>();

  public onSelect(node: NodeListItem): void {
    this.nodeSelect.emit(node);
  }
}
