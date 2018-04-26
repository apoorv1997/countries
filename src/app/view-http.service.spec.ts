import { TestBed, inject } from '@angular/core/testing';

import { ViewHttpService } from './view-http.service';

describe('ViewHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewHttpService]
    });
  });

  it('should be created', inject([ViewHttpService], (service: ViewHttpService) => {
    expect(service).toBeTruthy();
  }));
});
