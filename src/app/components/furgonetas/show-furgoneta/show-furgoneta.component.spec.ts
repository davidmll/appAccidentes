import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFurgonetaComponent } from './show-furgoneta.component';

describe('ShowFurgonetaComponent', () => {
  let component: ShowFurgonetaComponent;
  let fixture: ComponentFixture<ShowFurgonetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFurgonetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFurgonetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
