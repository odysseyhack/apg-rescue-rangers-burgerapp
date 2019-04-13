import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDataComponent } from './supply-data.component';

describe('SupplyDataComponent', () => {
  let component: SupplyDataComponent;
  let fixture: ComponentFixture<SupplyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
