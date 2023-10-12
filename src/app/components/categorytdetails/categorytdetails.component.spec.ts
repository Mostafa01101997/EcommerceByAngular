import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorytdetailsComponent } from './categorytdetails.component';

describe('CategorytdetailsComponent', () => {
  let component: CategorytdetailsComponent;
  let fixture: ComponentFixture<CategorytdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorytdetailsComponent]
    });
    fixture = TestBed.createComponent(CategorytdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
