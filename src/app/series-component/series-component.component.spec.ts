import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComponentComponent } from './series-component.component';

describe('SeriesComponentComponent', () => {
  let component: SeriesComponentComponent;
  let fixture: ComponentFixture<SeriesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
