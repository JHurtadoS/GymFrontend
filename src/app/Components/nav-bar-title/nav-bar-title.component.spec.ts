import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarTitleComponent } from './nav-bar-title.component';

describe('NavBarTitleComponent', () => {
  let component: NavBarTitleComponent;
  let fixture: ComponentFixture<NavBarTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
