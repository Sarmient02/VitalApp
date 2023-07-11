import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportTabsPage } from './support-tabs.page';

describe('SupportTabsPage', () => {
  let component: SupportTabsPage;
  let fixture: ComponentFixture<SupportTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
