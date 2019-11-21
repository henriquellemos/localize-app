import { TestBed } from '@angular/core/testing';

import { ImovelService } from './imovel.service';

describe('ImovelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImovelService = TestBed.get(ImovelService);
    expect(service).toBeTruthy();
  });
});
