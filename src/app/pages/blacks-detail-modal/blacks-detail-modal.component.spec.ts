import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksDetailModalComponent } from './blacks-detail-modal.component';

describe('BlacksDetailModalComponent', () => {
  let component: BlacksDetailModalComponent;
  let fixture: ComponentFixture<BlacksDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacksDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
