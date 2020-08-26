import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta013Component } from './gta013.component';

describe('Gta013Component', () => {
  let component: Gta013Component;
  let fixture: ComponentFixture<Gta013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
