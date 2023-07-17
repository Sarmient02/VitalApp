import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainAlertPage } from './main-alert.page';

describe('MainAlertPage', () => {
  let component: MainAlertPage;
  let fixture: ComponentFixture<MainAlertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
