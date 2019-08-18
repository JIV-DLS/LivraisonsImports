import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavireAddComponent } from './navire-add.component';

describe('NavireAddComponent', () => {
  let component: NavireAddComponent;
  let fixture: ComponentFixture<NavireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
