import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToDoItemComponent } from './what-to-do-item.component';

describe('WhatToDoItemComponent', () => {
  let component: WhatToDoItemComponent;
  let fixture: ComponentFixture<WhatToDoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatToDoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
