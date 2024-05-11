import { Injectable } from "@angular/core";
import { CheckValueService } from "./check-value.service";

@Injectable()
export class SingleService {

    constructor(
        private CheckValueService: CheckValueService
    ) {
        
    }

    sum(arg1: number, arg2?: number): number | undefined {
        if (!arg2) {
            return undefined;
        }
        if (!arg1) {
            return 42;
        }
        return arg1 + arg2;
    }


    check(): boolean{
        return this.CheckValueService.check();
    }
}