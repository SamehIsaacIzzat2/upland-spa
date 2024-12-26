/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeparatorListComponent } from './separator-list.component';

describe('SeparatorListComponent', () => {
  let component: SeparatorListComponent;
  let fixture: ComponentFixture<SeparatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
