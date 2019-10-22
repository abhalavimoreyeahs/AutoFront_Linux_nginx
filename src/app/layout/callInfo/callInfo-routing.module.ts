import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallInfoComponent } from './callInfo.component';

const routes: Routes = [
    {
        path: '',
        component: CallInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CallInfoRoutingModule {}