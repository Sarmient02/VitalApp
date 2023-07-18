import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPressureHistoryPage } from './main-pressure-history.page';

describe('MainPressureHistoryPage', () => {
  let component: MainPressureHistoryPage;
  let fixture: ComponentFixture<MainPressureHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainPressureHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
