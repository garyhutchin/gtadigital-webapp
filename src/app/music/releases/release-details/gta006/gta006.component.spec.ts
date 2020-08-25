import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta006Component } from './gta006.component';

describe('Gta006Component', () => {
  let component: Gta006Component;
  let fixture: ComponentFixture<Gta006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
