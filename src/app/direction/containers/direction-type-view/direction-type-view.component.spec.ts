import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DirectionTypeViewComponent} from './direction-type-view.component';

describe('DirectionTypeViewComponent', () => {
  let component: DirectionTypeViewComponent;
  let fixture: ComponentFixture<DirectionTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectionTypeViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
