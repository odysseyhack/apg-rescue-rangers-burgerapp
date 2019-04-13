import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectIncidentComponent } from './detect-incident.component';

describe('DetectIncidentComponent', () => {
  let component: DetectIncidentComponent;
  let fixture: ComponentFixture<DetectIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
