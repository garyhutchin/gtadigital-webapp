import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta011Component } from './gta011.component';

describe('Gta011Component', () => {
  let component: Gta011Component;
  let fixture: ComponentFixture<Gta011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
