import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllManagerComponent } from './allmanager.component';

const routes: Routes = [
    {
        path: '',
        component: AllManagerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllManagerRoutingModule {}