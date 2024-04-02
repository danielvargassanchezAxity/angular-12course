import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActiveTestComponent } from './can-active-test.component';

describe('CanActiveTestComponent', () => {
  let component: CanActiveTestComponent;
  let fixture: ComponentFixture<CanActiveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanActiveTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
