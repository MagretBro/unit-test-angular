// import { Injectable } from "@angular/core";
// import { TestBed } from "@angular/core/testing";
// import { CheckValueService } from "./check-value.service";

// @Injectable()
// export class CheckValueService {
//   check(): boolean {
//     return true;
    
//   }
// }


import { TestBed } from '@angular/core/testing';
import { CheckValueService } from './check-value.service';

describe('CheckValueService', () => {
  let service: CheckValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckValueService]
    });

    service = TestBed.inject(CheckValueService);
  });

  it('is should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must to check value', () => {
    const value = service.check();
    expect(value).toBeTruthy();
  });
});
