import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksCardComponent } from './blacks-card.component';

describe('BlacksCardComponent', () => {
  let component: BlacksCardComponent;
  let fixture: ComponentFixture<BlacksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
