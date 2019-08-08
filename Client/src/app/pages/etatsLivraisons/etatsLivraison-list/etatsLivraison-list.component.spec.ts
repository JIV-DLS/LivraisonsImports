import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatsLivraisonsListComponent } from './etatsLivraisons-list.component';

describe('EtatsLivraisonsListComponent', () => {
  let component: EtatsLivraisonsListComponent;
  let fixture: ComponentFixture<EtatsLivraisonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatsLivraisonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatsLivraisonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
