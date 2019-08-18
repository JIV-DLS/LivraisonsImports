import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxLivraisonAddComponent } from './lieux-livraison-add.component';

describe('LieuxLivraisonAddComponent', () => {
  let component: LieuxLivraisonAddComponent;
  let fixture: ComponentFixture<LieuxLivraisonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxLivraisonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxLivraisonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
