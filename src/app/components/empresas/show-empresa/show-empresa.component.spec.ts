import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpresaComponent } from './show-empresa.component';

describe('ShowEmpresaComponent', () => {
  let component: ShowEmpresaComponent;
  let fixture: ComponentFixture<ShowEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
