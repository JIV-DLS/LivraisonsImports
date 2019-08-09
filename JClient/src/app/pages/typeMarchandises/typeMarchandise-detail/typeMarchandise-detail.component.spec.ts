import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMarchandiseDetailComponent } from './typeMarchandise-detail.component';

describe('TypeMarchandiseDetailComponent', () => {
  let component: TypeMarchandiseDetailComponent;
  let fixture: ComponentFixture<TypeMarchandiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMarchandiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMarchandiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
