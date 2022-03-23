import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccidenteComponent } from './update-accidente.component';

describe('UpdateAccidenteComponent', () => {
  let component: UpdateAccidenteComponent;
  let fixture: ComponentFixture<UpdateAccidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
