import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastThumbnailComponent } from './podcast-thumbnail.component';

describe('PodcastThumbnailComponent', () => {
  let component: PodcastThumbnailComponent;
  let fixture: ComponentFixture<PodcastThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
