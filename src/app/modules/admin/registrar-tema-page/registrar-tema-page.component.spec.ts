import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTemaPageComponent } from './registrar-tema-page.component';

describe('RegistrarTemaPageComponent', () => {
  let component: RegistrarTemaPageComponent;
  let fixture: ComponentFixture<RegistrarTemaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarTemaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTemaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
