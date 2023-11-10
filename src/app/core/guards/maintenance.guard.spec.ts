import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { maintenanceGuard } from './maintenance.guard';

describe('maintenanceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => maintenanceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
