import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxLivraisonDetailComponent } from './lieuxLivraison-detail.component';

describe('LieuxLivraisonDetailComponent', () => {
  let component: LieuxLivraisonDetailComponent;
  let fixture: ComponentFixture<LieuxLivraisonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxLivraisonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxLivraisonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
