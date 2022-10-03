import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic4Component } from './dynamic4.component';

describe('Dynamic4Component', () => {
  let component: Dynamic4Component;
  let fixture: ComponentFixture<Dynamic4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamic4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamic4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
