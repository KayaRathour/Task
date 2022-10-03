import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutiTaskComponent } from './muti-task.component';

describe('MutiTaskComponent', () => {
  let component: MutiTaskComponent;
  let fixture: ComponentFixture<MutiTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutiTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutiTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
