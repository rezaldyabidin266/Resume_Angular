import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengalamanComponentComponent } from './pengalaman-component.component';

describe('PengalamanComponentComponent', () => {
  let component: PengalamanComponentComponent;
  let fixture: ComponentFixture<PengalamanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengalamanComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengalamanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
