import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackDetailsComponent } from './feedbackDetails.component';

const routes: Routes = [
    {
        path: '',
        component: FeedbackDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeedbackDetailsRoutingModule {}