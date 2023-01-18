/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlacksComponent } from './tables.component';

describe('BlacksComponent', () => {
  let component: BlacksComponent;
  let fixture: ComponentFixture<BlacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
