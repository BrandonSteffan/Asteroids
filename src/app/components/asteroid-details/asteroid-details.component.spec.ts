import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidDetailsComponent } from './asteroid-details.component';

describe('AsteroidDetailsComponent', () => {
  let component: AsteroidDetailsComponent;
  let fixture: ComponentFixture<AsteroidDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsteroidDetailsComponent]
    });
    fixture = TestBed.createComponent(AsteroidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
