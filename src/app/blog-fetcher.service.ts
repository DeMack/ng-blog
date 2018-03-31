import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Blog } from './blog';

const blogUrl = 'api/blogs';

@Injectable()
export class BlogFetcherService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBlogs(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(blogUrl);
  }

  fetchBlogById(id: string): Observable<Blog> {
    return this.httpClient.get<Blog>(`${blogUrl}?id=${id}`);
  }
}
