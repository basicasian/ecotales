import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPandaPage } from './info-panda.page';

describe('InfoPandaPage', () => {
  let component: InfoPandaPage;
  let fixture: ComponentFixture<InfoPandaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
