import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsContainerComponent } from './podcasts-container.component';

describe('PodcastsContainerComponent', () => {
  let component: PodcastsContainerComponent;
  let fixture: ComponentFixture<PodcastsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
