import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta014Component } from './gta014.component';

describe('Gta014Component', () => {
  let component: Gta014Component;
  let fixture: ComponentFixture<Gta014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
