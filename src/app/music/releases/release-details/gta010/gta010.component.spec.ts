import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta010Component } from './gta010.component';

describe('Gta010Component', () => {
  let component: Gta010Component;
  let fixture: ComponentFixture<Gta010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
