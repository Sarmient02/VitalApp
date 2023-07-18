import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainSynchronizePage } from './main-synchronize.page';

describe('MainSynchronizePage', () => {
  let component: MainSynchronizePage;
  let fixture: ComponentFixture<MainSynchronizePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainSynchronizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
