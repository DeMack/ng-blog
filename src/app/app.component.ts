import { Component, OnInit } from '@angular/core';

import { BlogFetcherService } from './blog-fetcher.service';
import { Blog } from './blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blogs: Blog[];
  blog: Blog;
  title = 'app';

  constructor(private blogFetcherService: BlogFetcherService) {}

  ngOnInit() {
    this.blogFetcherService.getBlogs().subscribe(blogs => this.blogs = blogs);
    this.blogFetcherService.fetchBlogById('3eca08fd-b874-4054-a1ef-a7f62720332c').subscribe(value => this.blog = value);
  }
}
