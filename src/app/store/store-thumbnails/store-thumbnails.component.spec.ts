import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreThumbnailsComponent } from './store-thumbnails.component';

describe('StoreThumbnailsComponent', () => {
  let component: StoreThumbnailsComponent;
  let fixture: ComponentFixture<StoreThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
