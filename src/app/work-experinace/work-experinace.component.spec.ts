import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperinaceComponent } from './work-experinace.component';

describe('WorkExperinaceComponent', () => {
  let component: WorkExperinaceComponent;
  let fixture: ComponentFixture<WorkExperinaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperinaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperinaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
