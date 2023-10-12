import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassowrdComponent } from './changepassowrd.component';

describe('ChangepassowrdComponent', () => {
  let component: ChangepassowrdComponent;
  let fixture: ComponentFixture<ChangepassowrdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangepassowrdComponent]
    });
    fixture = TestBed.createComponent(ChangepassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
