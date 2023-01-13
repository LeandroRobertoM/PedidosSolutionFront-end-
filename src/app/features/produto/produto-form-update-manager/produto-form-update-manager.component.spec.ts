import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormUpdateManagerComponent } from './produto-form-update-manager.component';

describe('ProdutoFormUpdateManagerComponent', () => {
  let component: ProdutoFormUpdateManagerComponent;
  let fixture: ComponentFixture<ProdutoFormUpdateManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoFormUpdateManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoFormUpdateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
