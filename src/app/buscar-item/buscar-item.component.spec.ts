import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarItemComponent } from './buscar-item.component';

describe('BuscarItemComponent', () => {
  let component: BuscarItemComponent;
  let fixture: ComponentFixture<BuscarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
