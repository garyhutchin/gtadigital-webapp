import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta012Component } from './gta012.component';

describe('Gta012Component', () => {
  let component: Gta012Component;
  let fixture: ComponentFixture<Gta012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
