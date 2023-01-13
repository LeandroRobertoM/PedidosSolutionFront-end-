import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoFormUpdateComponent } from './pedido-form-update.component';

describe('PedidoFormUpdateComponent', () => {
  let component: PedidoFormUpdateComponent;
  let fixture: ComponentFixture<PedidoFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
