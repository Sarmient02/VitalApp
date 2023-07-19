import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportConfigEditPage } from './support-config-edit.page';

describe('SupportConfigEditPage', () => {
  let component: SupportConfigEditPage;
  let fixture: ComponentFixture<SupportConfigEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportConfigEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
