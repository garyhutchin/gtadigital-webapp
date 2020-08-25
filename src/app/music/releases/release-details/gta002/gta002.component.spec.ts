import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta002Component } from './gta002.component';

describe('Gta002Component', () => {
  let component: Gta002Component;
  let fixture: ComponentFixture<Gta002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
