import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContactsPage } from './main-contacts.page';

describe('MainContactsPage', () => {
  let component: MainContactsPage;
  let fixture: ComponentFixture<MainContactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
