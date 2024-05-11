import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleService } from '../service/single.service';
import { CheckValueService } from '../service/check-value.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SingleService,
    CheckValueService
  ],
})
export class ModuleNameModule { }
