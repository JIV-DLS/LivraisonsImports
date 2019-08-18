import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandiseAddComponent } from './marchandise-add.component';

describe('MarchandiseAddComponent', () => {
  let component: MarchandiseAddComponent;
  let fixture: ComponentFixture<MarchandiseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandiseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandiseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
