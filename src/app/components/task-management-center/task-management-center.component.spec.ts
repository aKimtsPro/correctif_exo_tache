import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementCenterComponent } from './task-management-center.component';

describe('TaskManagementCenterComponent', () => {
  let component: TaskManagementCenterComponent;
  let fixture: ComponentFixture<TaskManagementCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagementCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagementCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
