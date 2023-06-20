import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftfinderComponent } from './giftfinder.component';

describe('GiftfinderComponent', () => {
  let component: GiftfinderComponent;
  let fixture: ComponentFixture<GiftfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftfinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
