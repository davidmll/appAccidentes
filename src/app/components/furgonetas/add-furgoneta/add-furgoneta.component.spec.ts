import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFurgonetaComponent } from './add-furgoneta.component';

describe('AddFurgonetaComponent', () => {
  let component: AddFurgonetaComponent;
  let fixture: ComponentFixture<AddFurgonetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFurgonetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFurgonetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
