import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    });
  });

  it('should be created', inject([InMemoryDataService], (service: InMemoryDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should provied three blogs', inject([InMemoryDataService], (service: InMemoryDataService) => {
    const blogs = service.createDb();
    expect(blogs.blogs.length).toBe(3);
  }));
});
