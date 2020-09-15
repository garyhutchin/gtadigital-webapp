import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMayLikePodcastThumbnailComponent } from './you-may-like-podcast-thumbnail.component';

describe('YouMayLikePodcastThumbnailComponent', () => {
  let component: YouMayLikePodcastThumbnailComponent;
  let fixture: ComponentFixture<YouMayLikePodcastThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouMayLikePodcastThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouMayLikePodcastThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
