import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpportunitePage } from './opportunite';

@NgModule({
  declarations: [
    OpportunitePage,
  ],
  imports: [
    IonicPageModule.forChild(OpportunitePage),
  ],
})
export class OpportunitePageModule {}
