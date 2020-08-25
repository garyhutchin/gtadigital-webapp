import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta005Component } from './gta005.component';

describe('Gta005Component', () => {
  let component: Gta005Component;
  let fixture: ComponentFixture<Gta005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
