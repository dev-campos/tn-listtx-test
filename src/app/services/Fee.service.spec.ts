/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeeService } from './Fee.service';

describe('Service: Fee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeService]
    });
  });

  it('should ...', inject([FeeService], (service: FeeService) => {
    expect(service).toBeTruthy();
  }));
});
