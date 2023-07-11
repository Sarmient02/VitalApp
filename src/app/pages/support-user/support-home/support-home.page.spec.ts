import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportHomePage } from './support-home.page';

describe('SupportHomePage', () => {
  let component: SupportHomePage;
  let fixture: ComponentFixture<SupportHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
