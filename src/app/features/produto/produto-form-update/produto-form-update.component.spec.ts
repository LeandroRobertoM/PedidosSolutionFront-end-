import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormUpdateComponent } from './produto-form-update.component';

describe('ProdutoFormUpdateComponent', () => {
  let component: ProdutoFormUpdateComponent;
  let fixture: ComponentFixture<ProdutoFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
