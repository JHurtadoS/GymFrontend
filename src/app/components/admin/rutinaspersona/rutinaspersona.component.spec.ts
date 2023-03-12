import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaspersonaComponent } from './rutinaspersona.component';

describe('RutinaspersonaComponent', () => {
  let component: RutinaspersonaComponent;
  let fixture: ComponentFixture<RutinaspersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaspersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinaspersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
