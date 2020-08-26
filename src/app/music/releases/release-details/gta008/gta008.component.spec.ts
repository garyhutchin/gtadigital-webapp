import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta008Component } from './gta008.component';

describe('Gta008Component', () => {
  let component: Gta008Component;
  let fixture: ComponentFixture<Gta008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
