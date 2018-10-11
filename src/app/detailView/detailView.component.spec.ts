import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { detailViewComponent } from './detailView.component';

describe('ChildComponent', () => {
  let component: detailViewComponent;
  let fixture: ComponentFixture<detailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ detailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
