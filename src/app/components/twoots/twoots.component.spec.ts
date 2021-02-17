import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwootsComponent } from './twoots.component';

describe('TwootsComponent', () => {
  let component: TwootsComponent;
  let fixture: ComponentFixture<TwootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwootsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
