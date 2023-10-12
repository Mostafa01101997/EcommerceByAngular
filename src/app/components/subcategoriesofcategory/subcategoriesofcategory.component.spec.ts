import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesofcategoryComponent } from './subcategoriesofcategory.component';

describe('SubcategoriesofcategoryComponent', () => {
  let component: SubcategoriesofcategoryComponent;
  let fixture: ComponentFixture<SubcategoriesofcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoriesofcategoryComponent]
    });
    fixture = TestBed.createComponent(SubcategoriesofcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
