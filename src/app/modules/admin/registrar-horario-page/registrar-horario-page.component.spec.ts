import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHorarioPageComponent } from './registrar-horario-page.component';

describe('RegistrarHorarioPageComponent', () => {
  let component: RegistrarHorarioPageComponent;
  let fixture: ComponentFixture<RegistrarHorarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarHorarioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarHorarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
