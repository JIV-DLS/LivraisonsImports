import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatsLivraisonsDetailComponent } from './etatsLivraisons-detail.component';

describe('EtatsLivraisonsDetailComponent', () => {
  let component: EtatsLivraisonsDetailComponent;
  let fixture: ComponentFixture<EtatsLivraisonsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatsLivraisonsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatsLivraisonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
