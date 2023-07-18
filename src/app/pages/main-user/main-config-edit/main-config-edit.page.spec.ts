import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainConfigEditPage } from './main-config-edit.page';

describe('MainConfigEditPage', () => {
  let component: MainConfigEditPage;
  let fixture: ComponentFixture<MainConfigEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainConfigEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
