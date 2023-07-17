import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContactEditPage } from './main-contact-edit.page';

describe('MainContactEditPage', () => {
  let component: MainContactEditPage;
  let fixture: ComponentFixture<MainContactEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainContactEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
