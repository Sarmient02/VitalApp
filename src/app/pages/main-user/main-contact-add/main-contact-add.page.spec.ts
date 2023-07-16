import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContactAddPage } from './main-contact-add.page';

describe('MainContactAddPage', () => {
  let component: MainContactAddPage;
  let fixture: ComponentFixture<MainContactAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainContactAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
