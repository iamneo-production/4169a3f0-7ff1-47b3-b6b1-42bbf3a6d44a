import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CartComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });
  it('FE_cartTest', () => {
    expect(component).toBeTruthy();
  });
});