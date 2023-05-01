import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAdminComponent } from './prueba-admin.component';

describe('PruebaAdminComponent', () => {
  let component: PruebaAdminComponent;
  let fixture: ComponentFixture<PruebaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
