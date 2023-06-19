import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddGiftsComponent } from './addgifts.component';

describe('AddGiftsComponent', () => {
  let component: AddGiftsComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AddGiftsComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AddGiftsComponent);
    component = fixture.componentInstance;
  });
  it('FE_addGiftsTest', () => {
    expect(component).toBeTruthy();
  });
});