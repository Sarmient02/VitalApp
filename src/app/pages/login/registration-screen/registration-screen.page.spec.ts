import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationScreenPage } from './registration-screen.page';

describe('RegistrationScreenPage', () => {
  let component: RegistrationScreenPage;
  let fixture: ComponentFixture<RegistrationScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrationScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
