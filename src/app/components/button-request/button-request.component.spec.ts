import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRequestComponent } from './button-request.component';

describe('ButtonRequestComponent', () => {
  let component: ButtonRequestComponent;
  let fixture: ComponentFixture<ButtonRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
