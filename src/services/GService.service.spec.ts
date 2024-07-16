/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GServiceService } from './GService.service';

describe('Service: GService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GServiceService]
    });
  });

  it('should ...', inject([GServiceService], (service: GServiceService) => {
    expect(service).toBeTruthy();
  }));
});
