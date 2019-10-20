import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionFullViewComponent } from './direction-full-view.component';

describe('DirectionFullViewComponent', () => {
  let component: DirectionFullViewComponent;
  let fixture: ComponentFixture<DirectionFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
