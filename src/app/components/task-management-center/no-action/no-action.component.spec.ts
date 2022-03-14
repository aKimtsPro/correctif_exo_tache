import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoActionComponent } from './no-action.component';

describe('NoActionComponent', () => {
  let component: NoActionComponent;
  let fixture: ComponentFixture<NoActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
