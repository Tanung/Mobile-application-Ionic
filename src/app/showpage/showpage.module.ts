import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowpagePageRoutingModule } from './showpage-routing.module';

import { ShowpagePage } from './showpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowpagePageRoutingModule
  ],
  declarations: [ShowpagePage]
})
export class ShowpagePageModule {}
