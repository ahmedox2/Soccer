import { TestBed } from '@angular/core/testing';

import { PlayerStatesService } from './player-states.service';

describe('PlayerStatesService', () => {
  let service: PlayerStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
