import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentportalComponent } from './parentportal.component';

describe('ParentportalComponent', () => {
  let component: ParentportalComponent;
  let fixture: ComponentFixture<ParentportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
