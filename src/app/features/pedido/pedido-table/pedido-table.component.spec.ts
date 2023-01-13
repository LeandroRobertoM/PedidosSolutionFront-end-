import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoTableComponent } from './pedido-table.component';

describe('PedidoTableComponent', () => {
  let component: PedidoTableComponent;
  let fixture: ComponentFixture<PedidoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
