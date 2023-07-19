import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportConfigPage } from './support-config.page';

describe('SupportConfigPage', () => {
  let component: SupportConfigPage;
  let fixture: ComponentFixture<SupportConfigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
