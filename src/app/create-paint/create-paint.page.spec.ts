import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePaintPage } from './create-paint.page';

describe('CreatePaintPage', () => {
  let component: CreatePaintPage;
  let fixture: ComponentFixture<CreatePaintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
