import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta003Component } from './gta003.component';

describe('Gta003Component', () => {
  let component: Gta003Component;
  let fixture: ComponentFixture<Gta003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
