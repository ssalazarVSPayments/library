import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTreeComponent } from './layout-tree.component';

describe('LayoutTreeComponent', () => {
  let component: LayoutTreeComponent;
  let fixture: ComponentFixture<LayoutTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
