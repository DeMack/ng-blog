import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import { MarkdownModule } from 'ngx-markdown';

import { BlogFetcherService } from './blog-fetcher.service';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [ BlogFetcherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
