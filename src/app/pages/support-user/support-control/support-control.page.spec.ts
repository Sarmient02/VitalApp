import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportControlPage } from './support-control.page';

describe('SupportControlPage', () => {
  let component: SupportControlPage;
  let fixture: ComponentFixture<SupportControlPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
