import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresadosPageComponent } from './interesados-page.component';

describe('InteresadosPageComponent', () => {
  let component: InteresadosPageComponent;
  let fixture: ComponentFixture<InteresadosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteresadosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
