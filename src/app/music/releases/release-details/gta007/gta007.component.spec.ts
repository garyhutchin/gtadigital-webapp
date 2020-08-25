import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta007Component } from './gta007.component';

describe('Gta007Component', () => {
  let component: Gta007Component;
  let fixture: ComponentFixture<Gta007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
