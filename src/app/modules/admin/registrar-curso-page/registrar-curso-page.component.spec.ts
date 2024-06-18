import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCursoPageComponent } from './registrar-curso-page.component';

describe('RegistrarCursoPageComponent', () => {
  let component: RegistrarCursoPageComponent;
  let fixture: ComponentFixture<RegistrarCursoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarCursoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCursoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
