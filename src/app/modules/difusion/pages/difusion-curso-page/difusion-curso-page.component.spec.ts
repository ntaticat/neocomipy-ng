import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifusionCursoPageComponent } from './difusion-curso-page.component';

describe('DifusionCursoPageComponent', () => {
  let component: DifusionCursoPageComponent;
  let fixture: ComponentFixture<DifusionCursoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifusionCursoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifusionCursoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
