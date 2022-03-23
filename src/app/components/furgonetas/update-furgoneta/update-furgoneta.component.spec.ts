import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFurgonetaComponent } from './update-furgoneta.component';

describe('UpdateFurgonetaComponent', () => {
  let component: UpdateFurgonetaComponent;
  let fixture: ComponentFixture<UpdateFurgonetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFurgonetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFurgonetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
