import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInteresadoPageComponent } from './registrar-interesado-page.component';

describe('RegistrarInteresadoPageComponent', () => {
  let component: RegistrarInteresadoPageComponent;
  let fixture: ComponentFixture<RegistrarInteresadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarInteresadoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarInteresadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
