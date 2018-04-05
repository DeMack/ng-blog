import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let title: DebugElement;

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
      declarations: [ BlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;

    title = fixture.debugElement.query(By.css('h1'));

    component.blog = expectedBlog;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "TestPost" in h1', () => {
    expect(title.nativeElement.textContent).toEqual(expectedBlog.title);
  });
});
