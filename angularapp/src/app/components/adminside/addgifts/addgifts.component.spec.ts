import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgiftsComponent } from './addgifts.component';

describe('AddgiftsComponent', () => {
  let component: AddgiftsComponent;
  let fixture: ComponentFixture<AddgiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
