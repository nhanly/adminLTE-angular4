import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule
} from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';
import { KendouiRoutingModule } from './kendoui-routing.module';
import { KendouiComponent } from './kendoui.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        KendouiRoutingModule,
        GridModule
    ],
    declarations: [
        KendouiComponent
    ]
})
export class KendouiModule { }
