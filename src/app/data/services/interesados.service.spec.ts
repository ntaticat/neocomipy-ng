import { TestBed } from '@angular/core/testing';

import { InteresadosService } from './interesados.service';

describe('InteresadosService', () => {
  let service: InteresadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteresadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
