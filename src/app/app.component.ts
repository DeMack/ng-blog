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

  constructor(private blogFetcherService: BlogFetcherService) {}

  ngOnInit() {
    this.blogFetcherService.getBlogs().subscribe(blogs => this.blogs = blogs);
    this.fetchBlog('3eca08fd-b874-4054-a1ef-a7f62720332c');
  }

  onClickBlog(id: string) {
    this.fetchBlog(id);
  }

 fetchBlog(id: string) {
    this.blogFetcherService.fetchBlogById(id).subscribe(value => this.blog = value);
  }
}
