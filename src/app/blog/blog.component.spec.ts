import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let title: DebugElement;
  let date: DebugElement;
  let body: DebugElement;
  let tools: DebugElement[];
  let bibs: DebugElement[];
  let tags: DebugElement;

  const expectedBlog = {
    id: 'id1',
    title: 'TestPost',
    body: 'Test body',
    date: '01032017',
    tags: ['testTag1', 'testTag2'],
    project: 'test-project',
    tools: ['tool1', 'tool2'],
    bibliography: ['bibli1', 'bibli2']
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MarkdownModule ],
      declarations: [ BlogComponent ],
      providers: [ MarkdownService, MarkedOptions ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;

    title = fixture.debugElement.query(By.css('h1'));
    date = fixture.debugElement.query(By.css('#date'));
    body = fixture.debugElement.query(By.css('#blog-body'));

    component.blog = expectedBlog;
    fixture.detectChanges();

    tools = fixture.debugElement.queryAll(By.css('.tool'));
    bibs = fixture.debugElement.queryAll(By.css('.biblio'));
    tags = fixture.debugElement.query(By.css('.tag'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all parts populated', () => {
    expect.assertions(6);
    expect(title.nativeElement.textContent).toEqual(expectedBlog.title);
    expect(date.nativeElement.textContent).toEqual(expectedBlog.date);
    expect(body.nativeElement.textContent.trim()).toEqual(expectedBlog.body);
    expect(tools.length).toEqual(expectedBlog.tools.length);
    expect(bibs.length).toEqual(expectedBlog.bibliography.length);
    expect(tags.nativeElement.textContent).toEqual(expectedBlog.tags.join(', '));
  });
});
