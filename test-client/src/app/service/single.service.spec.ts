import { TestBed } from "@angular/core/testing";
import { SingleService } from "./single.service";

describe ('Single service', () => {
    it( 'должен создать экземпляр класса', () => {
        const service = new SingleService();
        expect(service).toBeTruthy();

    });
});
