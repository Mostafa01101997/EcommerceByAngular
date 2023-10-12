import { TestBed } from '@angular/core/testing';

import { EcommerceproductsService } from './ecommerceproducts.service';

describe('EcommerceproductsService', () => {
  let service: EcommerceproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
