import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHerramientaComponent } from './create-herramienta.component';

describe('CreateHerramientaComponent', () => {
  let component: CreateHerramientaComponent;
  let fixture: ComponentFixture<CreateHerramientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHerramientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
