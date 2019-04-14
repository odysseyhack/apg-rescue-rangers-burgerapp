import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTimelineItemComponent } from './feed-timeline-item.component';

describe('FeedTimelineItemComponent', () => {
  let component: FeedTimelineItemComponent;
  let fixture: ComponentFixture<FeedTimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTimelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
