/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGaurdService } from './authGaurd.service';

describe('Service: AuthGaurd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurdService]
    });
  });

  it('should ...', inject([AuthGaurdService], (service: AuthGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
