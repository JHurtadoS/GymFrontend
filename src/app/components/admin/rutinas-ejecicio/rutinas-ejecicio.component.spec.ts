import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasEjecicioComponent } from './rutinas-ejecicio.component';

describe('RutinasEjecicioComponent', () => {
  let component: RutinasEjecicioComponent;
  let fixture: ComponentFixture<RutinasEjecicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinasEjecicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasEjecicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
