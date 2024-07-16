/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthSerivceService } from './authSerivce.service';

describe('Service: AuthSerivce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSerivceService]
    });
  });

  it('should ...', inject([AuthSerivceService], (service: AuthSerivceService) => {
    expect(service).toBeTruthy();
  }));
});
