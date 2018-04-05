import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BlogFetcherService } from './blog-fetcher.service';
import { InMemoryDataService } from './in-memory-data.service';
import { Blog } from './blog';

describe('BlogFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [ BlogFetcherService, InMemoryDataService ]
    });
    TestBed.compileComponents();
  });

  it('should be created', inject([BlogFetcherService], (service: BlogFetcherService) => {
    expect(service).toBeTruthy();
  }));

  it('#getBlogs should return value from observable', async(inject([ BlogFetcherService ], (service: BlogFetcherService) => {
    expect.assertions(2);
    service.getBlogs().subscribe(value => {
      const blog = { id: 'id1', title: 'TestPost', body: 'Test body', date: '01032017', tags: ['testTag1', 'testTag2'] };
      expect(value).toEqual(jasmine.arrayContaining([blog]));
      expect(value.length).toEqual(3);
    });
  })));

  it('#fetchBlogById should return a Blog', async(inject([BlogFetcherService], (service: BlogFetcherService) => {
    expect.assertions(1);
    service.fetchBlogById('id1').subscribe(value => {
      const blog = { id: 'id1', title: 'TestPost', body: 'Test body', date: '01032017', tags: ['testTag1', 'testTag2'] };
      expect(value).toEqual(blog);
    });
  })));
});

