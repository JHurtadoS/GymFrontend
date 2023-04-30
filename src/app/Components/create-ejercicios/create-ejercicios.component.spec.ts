import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEjerciciosComponent } from './create-ejercicios.component';

describe('CreateEjerciciosComponent', () => {
  let component: CreateEjerciciosComponent;
  let fixture: ComponentFixture<CreateEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEjerciciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
