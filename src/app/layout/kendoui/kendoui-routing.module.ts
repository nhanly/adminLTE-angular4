import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KendouiComponent } from './kendoui.component';

const routes: Routes = [
    { path: '', component: KendouiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KendouiRoutingModule { }
