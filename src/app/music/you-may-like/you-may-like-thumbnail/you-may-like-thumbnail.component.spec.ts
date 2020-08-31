import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMayLikeThumbnailComponent } from './you-may-like-thumbnail.component';

describe('YouMayLikeThumbnailComponent', () => {
  let component: YouMayLikeThumbnailComponent;
  let fixture: ComponentFixture<YouMayLikeThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouMayLikeThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouMayLikeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
