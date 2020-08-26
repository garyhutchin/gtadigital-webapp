import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta001Component } from './gta001.component';

describe('Gta001Component', () => {
  let component: Gta001Component;
  let fixture: ComponentFixture<Gta001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
