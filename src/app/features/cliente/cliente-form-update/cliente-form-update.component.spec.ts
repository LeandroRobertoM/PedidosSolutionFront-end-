import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormUpdateComponent } from './cliente-form-update.component';

describe('ClienteFormUpdateComponent', () => {
  let component: ClienteFormUpdateComponent;
  let fixture: ComponentFixture<ClienteFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
