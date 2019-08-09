import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxLivraisonListComponent } from './lieuxLivraison-list.component';

describe('LieuxLivraisonListComponent', () => {
  let component: LieuxLivraisonListComponent;
  let fixture: ComponentFixture<LieuxLivraisonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxLivraisonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxLivraisonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
