import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportPressureHistoryPage } from './support-pressure-history.page';

describe('SupportPressureHistoryPage', () => {
  let component: SupportPressureHistoryPage;
  let fixture: ComponentFixture<SupportPressureHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportPressureHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
