import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Podcast30Component } from './podcast30.component';

describe('Podcast30Component', () => {
  let component: Podcast30Component;
  let fixture: ComponentFixture<Podcast30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Podcast30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Podcast30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
