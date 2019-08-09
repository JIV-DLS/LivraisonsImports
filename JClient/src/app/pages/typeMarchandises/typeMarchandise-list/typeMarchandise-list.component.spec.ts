import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMarchandiseListComponent } from './typeMarchandise-list.component';

describe('TypeMarchandiseListComponent', () => {
  let component: TypeMarchandiseListComponent;
  let fixture: ComponentFixture<TypeMarchandiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMarchandiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMarchandiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
