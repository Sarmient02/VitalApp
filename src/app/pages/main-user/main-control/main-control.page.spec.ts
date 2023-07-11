import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainControlPage } from './main-control.page';

describe('MainControlPage', () => {
  let component: MainControlPage;
  let fixture: ComponentFixture<MainControlPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
