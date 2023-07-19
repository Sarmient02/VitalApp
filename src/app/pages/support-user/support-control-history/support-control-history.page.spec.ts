import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportControlHistoryPage } from './support-control-history.page';

describe('SupportControlHistoryPage', () => {
  let component: SupportControlHistoryPage;
  let fixture: ComponentFixture<SupportControlHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportControlHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
