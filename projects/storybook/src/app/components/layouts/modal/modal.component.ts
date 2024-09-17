import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [DialogModule, InputTextModule, ButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public isDialogVisible: ModelSignal<boolean> = model(false);
  public isModalDelete: InputSignal<boolean> = input<boolean>(false);
  public dialogHeader: InputSignal<string> = input<string>('');
  public selectedNode: InputSignal<TreeNode | null> = input<TreeNode | null>(
    null,
  );

  public updateNode(): void {
    console.log('test');
    this.isDialogVisible.set(false);
  }
}
