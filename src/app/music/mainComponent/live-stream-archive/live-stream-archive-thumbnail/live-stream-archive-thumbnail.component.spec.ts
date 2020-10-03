import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamArchiveThumbnailComponent } from './live-stream-archive-thumbnail.component';

describe('LiveStreamArchiveThumbnailComponent', () => {
  let component: LiveStreamArchiveThumbnailComponent;
  let fixture: ComponentFixture<LiveStreamArchiveThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamArchiveThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamArchiveThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
