import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowpagePage } from './showpage.page';

const routes: Routes = [
  {
    path: '',
    component: ShowpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowpagePageRoutingModule {}
