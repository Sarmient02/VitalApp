import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationTypeScreenPage } from './registration-type-screen.page';

describe('RegistrationTypeScreenPage', () => {
  let component: RegistrationTypeScreenPage;
  let fixture: ComponentFixture<RegistrationTypeScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrationTypeScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
