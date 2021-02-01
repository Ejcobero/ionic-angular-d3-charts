import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomFeaturePage } from './custom-feature.page';

const routes: Routes = [
  {
    path: '',
    component: CustomFeaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFeaturePageRoutingModule {}
