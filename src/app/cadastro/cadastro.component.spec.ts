import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroImovelComponent } from './cadastro.component';

describe('CadastroImovelComponent', () => {
  let component: CadastroImovelComponent;
  let fixture: ComponentFixture<CadastroImovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroImovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
