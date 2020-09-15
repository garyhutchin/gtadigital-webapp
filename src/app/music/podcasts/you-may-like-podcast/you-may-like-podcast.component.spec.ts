import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMayLikePodcastComponent } from './you-may-like-podcast.component';

describe('YouMayLikePodcastComponent', () => {
  let component: YouMayLikePodcastComponent;
  let fixture: ComponentFixture<YouMayLikePodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouMayLikePodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouMayLikePodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
