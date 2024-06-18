import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifusionCursosPageComponent } from './difusion-cursos-page.component';

describe('DifusionCursosPageComponent', () => {
  let component: DifusionCursosPageComponent;
  let fixture: ComponentFixture<DifusionCursosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifusionCursosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifusionCursosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
