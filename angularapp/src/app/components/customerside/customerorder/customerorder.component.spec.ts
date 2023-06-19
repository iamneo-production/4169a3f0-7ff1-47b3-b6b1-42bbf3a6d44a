import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerOrderComponent } from './customerorder.component';

describe('CustomerOrderComponent', () => {
  let component: CustomerOrderComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CustomerOrderComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CustomerOrderComponent);
    component = fixture.componentInstance;
  });
  it('FE_customerOrderTest', () => {
    expect(component).toBeTruthy();
  });
});