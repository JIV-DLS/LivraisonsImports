import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonAddComponent } from './livraison-add.component';

describe('LivraisonAddComponent', () => {
  let component: LivraisonAddComponent;
  let fixture: ComponentFixture<LivraisonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
