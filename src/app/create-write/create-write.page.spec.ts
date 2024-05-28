import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateWritePage } from './create-write.page';

describe('CreateWritePage', () => {
  let component: CreateWritePage;
  let fixture: ComponentFixture<CreateWritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
