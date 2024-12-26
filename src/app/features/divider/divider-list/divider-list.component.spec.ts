/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DividerListComponent } from './divider-list.component';

describe('DividerListComponent', () => {
  let component: DividerListComponent;
  let fixture: ComponentFixture<DividerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
