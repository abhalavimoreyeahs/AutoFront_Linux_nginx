import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCampaignComponent } from './viewCampaign.component';

const routes: Routes = [
    {
        path: '',
        component: ViewCampaignComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewCampaignRoutingModule {}