import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta015Component } from './gta015.component';

describe('Gta015Component', () => {
  let component: Gta015Component;
  let fixture: ComponentFixture<Gta015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
