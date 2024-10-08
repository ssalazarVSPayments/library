import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutToolbarComponent } from './layout-toolbar.component';

describe('LayoutToolbarComponent', () => {
  let component: LayoutToolbarComponent;
  let fixture: ComponentFixture<LayoutToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
