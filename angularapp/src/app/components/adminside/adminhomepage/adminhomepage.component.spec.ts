import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminHomePageComponent } from './adminhomepage.component';

describe('AdminHomePageComponent', () => {
  let component: AdminHomePageComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AdminHomePageComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AdminHomePageComponent);
    component = fixture.componentInstance;
  });
  it('FE_adminHomePageTest', () => {
    expect(component).toBeTruthy();
  });
});