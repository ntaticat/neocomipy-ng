import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDocentePageComponent } from './registrar-docente-page.component';

describe('RegistrarDocentePageComponent', () => {
  let component: RegistrarDocentePageComponent;
  let fixture: ComponentFixture<RegistrarDocentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarDocentePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDocentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
