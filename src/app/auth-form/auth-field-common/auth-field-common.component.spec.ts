import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFieldCommonComponent } from './auth-field-common.component';

describe('AuthFieldCommonComponent', () => {
  let component: AuthFieldCommonComponent;
  let fixture: ComponentFixture<AuthFieldCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFieldCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFieldCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
