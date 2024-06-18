import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifusionPageComponent } from './difusion-page.component';

describe('DifusionPageComponent', () => {
  let component: DifusionPageComponent;
  let fixture: ComponentFixture<DifusionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifusionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifusionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
