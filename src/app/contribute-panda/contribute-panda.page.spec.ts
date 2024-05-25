import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributePandaPage } from './contribute-panda.page';

describe('ContributePandaPage', () => {
  let component: ContributePandaPage;
  let fixture: ComponentFixture<ContributePandaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributePandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
