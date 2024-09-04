import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-layout-toolbar',
  standalone: true,
  imports: [ToolbarModule, BreadcrumbModule],
  templateUrl: './layout-toolbar.component.html',
  styleUrl: './layout-toolbar.component.scss',
})
export class LayoutToolbarComponent implements OnInit {
  public items: MenuItem[] | undefined;
  public home: MenuItem | undefined;

  public ngOnInit(): void {
    this.items = [{ label: 'Estructura comercial' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
