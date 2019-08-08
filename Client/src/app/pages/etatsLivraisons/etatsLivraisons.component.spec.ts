import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatsLivraisonssComponent } from './etatsLivraisonss.component';

describe('EtatsLivraisonssComponent', () => {
  let component: EtatsLivraisonssComponent;
  let fixture: ComponentFixture<EtatsLivraisonssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatsLivraisonssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatsLivraisonssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
