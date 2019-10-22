import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentFeedbackComponent } from './agentfeedback.component';

const routes: Routes = [
    {
        path: '',
        component: AgentFeedbackComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgentFeedbackRoutingModule {}