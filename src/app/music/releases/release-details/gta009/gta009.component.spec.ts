import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta009Component } from './gta009.component';

describe('Gta009Component', () => {
  let component: Gta009Component;
  let fixture: ComponentFixture<Gta009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
