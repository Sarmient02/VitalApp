import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportAlertPage } from './support-alert.page';

describe('SupportAlertPage', () => {
  let component: SupportAlertPage;
  let fixture: ComponentFixture<SupportAlertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
