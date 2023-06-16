import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategiftComponent } from './updategift.component';

describe('UpdategiftComponent', () => {
  let component: UpdategiftComponent;
  let fixture: ComponentFixture<UpdategiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
