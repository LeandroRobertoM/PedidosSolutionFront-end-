import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoFormUpdateManagerComponent } from './pedido-form-update-manager.component';

describe('PedidoFormUpdateManagerComponent', () => {
  let component: PedidoFormUpdateManagerComponent;
  let fixture: ComponentFixture<PedidoFormUpdateManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoFormUpdateManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoFormUpdateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
