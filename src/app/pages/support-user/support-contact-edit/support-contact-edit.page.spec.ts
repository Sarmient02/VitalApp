import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportContactEditPage } from './support-contact-edit.page';

describe('SupportContactEditPage', () => {
  let component: SupportContactEditPage;
  let fixture: ComponentFixture<SupportContactEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportContactEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
