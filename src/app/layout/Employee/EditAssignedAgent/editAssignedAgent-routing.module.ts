import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAssignedAgentComponent } from './editAssignedAgent.component';

const routes: Routes = [
    {
        path: '',
        component: EditAssignedAgentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditAssignedAgentRoutingModule {}