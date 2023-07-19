import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportContactAddPage } from './support-contact-add.page';

describe('SupportContactAddPage', () => {
  let component: SupportContactAddPage;
  let fixture: ComponentFixture<SupportContactAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportContactAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
