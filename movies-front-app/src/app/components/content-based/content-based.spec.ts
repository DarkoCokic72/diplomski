import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBased } from './content-based';

describe('ContentBased', () => {
  let component: ContentBased;
  let fixture: ComponentFixture<ContentBased>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBased]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBased);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
