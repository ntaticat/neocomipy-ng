import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarInteresadoPageComponent } from './identificar-interesado-page.component';

describe('IdentificarInteresadoPageComponent', () => {
  let component: IdentificarInteresadoPageComponent;
  let fixture: ComponentFixture<IdentificarInteresadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentificarInteresadoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificarInteresadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
