import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BlogFetcherService } from './blog-fetcher.service';
import { InMemoryDataService } from './in-memory-data.service';
import { Blog } from './blog';

describe('BlogFetcherService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ BlogFetcherService, InMemoryDataService ]

    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([BlogFetcherService], (service: BlogFetcherService) => {
    expect(service).toBeTruthy();
  }));

  it('#getBlogs should return value from observable', inject([ BlogFetcherService ], (service: BlogFetcherService) => {
    service.getBlogs().subscribe(value => {
      fail();
      const blog = {id: 'id1', title: 'TestPost', body: 'Test body', date: new Date(), tags: ['testTag1', 'testTag2'] };
      expect(value).toEqual(jasmine.arrayContaining([blog]));
      expect(value.length).toEqual(3);
    });
  }));

  it('#fetchBlogById should return a Blog', inject([BlogFetcherService], (service: BlogFetcherService) => {
    console.log('Test Log');
    service.fetchBlogById('id1').subscribe(value => {
      fail('Test Failure');
      console.log(value);
      const blog = {id: 'id1', title: 'TestPost', body: 'Test body', date: new Date(), tags: ['testTag1', 'testTag2'] };
      expect(value).toEqual(blog);
    });
  }));
});

