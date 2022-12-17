import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioComponentComponent } from './portofolio-component.component';

describe('PortofolioComponentComponent', () => {
  let component: PortofolioComponentComponent;
  let fixture: ComponentFixture<PortofolioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofolioComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
