import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTwootComponent } from './new-twoot.component';

describe('NewTwootComponent', () => {
  let component: NewTwootComponent;
  let fixture: ComponentFixture<NewTwootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTwootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTwootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
