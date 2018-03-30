import { TestBed, inject } from '@angular/core/testing';

import { BlogFetcherService } from './blog-fetcher.service';

describe('BlogFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogFetcherService]
    });
  });

  it('should be created', inject([BlogFetcherService], (service: BlogFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
