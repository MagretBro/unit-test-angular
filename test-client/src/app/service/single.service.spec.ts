

// III tepy
import { TestBed } from "@angular/core/testing";
import { SingleService } from "./single.service";
import { CheckValueService } from "./check-value.service";

describe ('Single service', () => {
    let service: SingleService;

    const fakeCheckValueService: Partial<CheckValueService> = {
        check: () => true
    }

    beforeEach( () => {
        TestBed.configureTestingModule({
            providers: [
                SingleService, 
                { provide: CheckValueService, useValue: fakeCheckValueService}
            ]
        })
        service = TestBed.inject(SingleService);
        });

    it( 'должен создать экземпляр класса', () => {
        expect(service).toBeTruthy(); 

    });

    it( 'summorize 2 int', () => {
        const sum = service.sum( 1, 3);
        expect(sum).toBe(4);
    });

    it ('return undefined if not second arg', () => {
        const sum = service.sum(1);
        expect(sum).toBeUndefined();
    });

    // it('retur 42, if not arg1', () => {
    //     const sum = service.sum(undefined, 2);
    //     expect(sum).toBeUndefined
    // });
    it('retur 42, if not arg1', () => {
        const sum = service.sum(NaN, 2);
        expect(sum).toBe(42);
    });

    it('проверка значения', () => {
        const value = service.check();
        expect(value).toBeTruthy();
    }
    );
});


// I type
// import { SingleService } from "./single.service";
// import { CheckValueService } from "./check-value.service";

// describe ('Single service', () => {
//     let service: SingleService;

//     const fakeCheckValueService = { check: () => true} ;

//     beforeEach( () => {
//         service = new SingleService(fakeCheckValueService as CheckValueService)
//         });

//     it( 'должен создать экземпляр класса', () => {
//         expect(service).toBeTruthy(); 

//     });

//     it( 'должен проверять значение', () => {
//         const value = service.check();
//         expect(value).toBeTruthy();
//     });




    // it( 'summorize 2 int', () => {
    //     const sum = service.sum( 1, 3);
    //     expect(sum).toBe(4);
    // });

    // it ('return undefined if not second arg', () => {
    //     const sum = service.sum(1);
    //     expect(sum).toBeUndefined();
    // });
// });


// II type
// import { Injectable } from "@angular/core";
// import { CheckValueService } from "./check-value.service.spec";
// import { SingleService } from "./single.service";

// @Injectable()
// export class AnotherService {
//   constructor(private checkValueService: CheckValueService) {}

//   someMethod() {
//     // Вызываем метод check() из CheckValueService
//     const result = this.checkValueService.check();

//     // Делаем что-то на основе результата проверки
//     if (result) {
//       console.log('Условие выполнено');
//     } else {
//       console.log('Условие не выполнено');
//     }
//   }
// }



