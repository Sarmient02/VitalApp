import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportContactsPage } from './support-contacts.page';

describe('SupportContactsPage', () => {
  let component: SupportContactsPage;
  let fixture: ComponentFixture<SupportContactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
