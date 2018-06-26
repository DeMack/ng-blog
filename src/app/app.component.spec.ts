import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbar, MatSidenavModule } from '@angular/material';
import { Platform } from '@angular/cdk/platform';

import { MarkdownModule } from 'ngx-markdown';

import { BlogComponent } from './blog/blog.component';

import { BlogFetcherService } from './blog-fetcher.service';

describe('AppComponent', () => {
  let blogFetcherStub: Partial<BlogFetcherService>;

  beforeEach(async(() => {
    blogFetcherStub = {};
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        BrowserAnimationsModule,
        MarkdownModule.forRoot()
      ],
      declarations: [
        AppComponent,
        MatToolbar,
        BlogComponent
      ],
      providers: [
        { provide: BlogFetcherService, useValue: blogFetcherStub },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
