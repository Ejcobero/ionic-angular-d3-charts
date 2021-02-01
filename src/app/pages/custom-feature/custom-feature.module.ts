import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomFeaturePageRoutingModule } from './custom-feature-routing.module';

import { CustomFeaturePage } from './custom-feature.page';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomFeaturePageRoutingModule,
    SharedModule
  ],
  declarations: [CustomFeaturePage]
})
export class CustomFeaturePageModule {}
