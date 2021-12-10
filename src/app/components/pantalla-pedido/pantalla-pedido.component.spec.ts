import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPedidoComponent } from './pantalla-pedido.component';

describe('PantallaPedidoComponent', () => {
  let component: PantallaPedidoComponent;
  let fixture: ComponentFixture<PantallaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
