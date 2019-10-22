import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAgentsComponent } from './allagents.component';

const routes: Routes = [
    {
        path: '',
        component: AllAgentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllAgentsRoutingModule {}