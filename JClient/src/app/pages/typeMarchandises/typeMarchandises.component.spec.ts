import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMarchandisesComponent } from './typeMarchandises.component';

describe('TypeMarchandisesComponent', () => {
  let component: TypeMarchandisesComponent;
  let fixture: ComponentFixture<TypeMarchandisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMarchandisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMarchandisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
