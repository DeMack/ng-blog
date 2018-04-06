import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BlogComponent } from './blog/blog.component';

import { BlogFetcherService } from './blog-fetcher.service';

describe('AppComponent', () => {
  let blogFetcherStub: Partial<BlogFetcherService>;

  beforeEach(async(() => {
    blogFetcherStub = {};
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BlogComponent
      ],
      providers: [ { provide: BlogFetcherService, useValue: blogFetcherStub } ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
