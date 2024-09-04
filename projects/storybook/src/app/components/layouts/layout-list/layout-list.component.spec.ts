import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutListComponent } from './layout-list.component';

describe('LayoutListComponent', () => {
  let component: LayoutListComponent;
  let fixture: ComponentFixture<LayoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
