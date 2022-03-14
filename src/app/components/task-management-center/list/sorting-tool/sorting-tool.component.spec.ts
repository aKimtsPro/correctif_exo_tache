import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingToolComponent } from './sorting-tool.component';

describe('SortingToolComponent', () => {
  let component: SortingToolComponent;
  let fixture: ComponentFixture<SortingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
