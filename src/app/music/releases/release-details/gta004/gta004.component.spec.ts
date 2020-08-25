import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta004Component } from './gta004.component';

describe('Gta004Component', () => {
  let component: Gta004Component;
  let fixture: ComponentFixture<Gta004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
