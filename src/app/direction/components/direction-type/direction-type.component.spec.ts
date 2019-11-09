import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionTypeComponent } from './direction-type.component';

describe('DirectionTypeComponent', () => {
  let component: DirectionTypeComponent;
  let fixture: ComponentFixture<DirectionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
