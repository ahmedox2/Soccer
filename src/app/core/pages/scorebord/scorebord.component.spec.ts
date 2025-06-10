import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorebordComponent } from './scorebord.component';

describe('ScorebordComponent', () => {
  let component: ScorebordComponent;
  let fixture: ComponentFixture<ScorebordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScorebordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScorebordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
