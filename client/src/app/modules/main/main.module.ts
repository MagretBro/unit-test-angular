import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";

import { Route, RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,

        RouterModule
    ]
})
export class MainModule { }