import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatsLivraisonAddComponent } from './etats-livraison-add.component';

describe('EtatsLivraisonAddComponent', () => {
  let component: EtatsLivraisonAddComponent;
  let fixture: ComponentFixture<EtatsLivraisonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatsLivraisonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatsLivraisonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
