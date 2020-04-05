import { TestBed } from '@angular/core/testing';

import { JemaatService } from './jemaat.service';

describe('JemaatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JemaatService = TestBed.get(JemaatService);
    expect(service).toBeTruthy();
  });
});
