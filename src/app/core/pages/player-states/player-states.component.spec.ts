import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerStateComponent } from './player-states.component';

describe('PlayerStateComponent', () => {
  let component: PlayerStateComponent;
  let fixture: ComponentFixture<PlayerStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerStateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display player name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Mohamed Salah');
  });
});
