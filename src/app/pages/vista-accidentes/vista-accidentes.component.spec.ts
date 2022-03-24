import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAccidentesComponent } from './vista-accidentes.component';

describe('VistaAccidentesComponent', () => {
  let component: VistaAccidentesComponent;
  let fixture: ComponentFixture<VistaAccidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAccidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAccidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
