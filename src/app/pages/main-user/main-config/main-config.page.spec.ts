import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainConfigPage } from './main-config.page';

describe('MainConfigPage', () => {
  let component: MainConfigPage;
  let fixture: ComponentFixture<MainConfigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
