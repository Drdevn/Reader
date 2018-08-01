import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseABookPage } from './choose-a-book';

@NgModule({
  declarations: [
    ChooseABookPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseABookPage),
  ],
})
export class ChooseABookPageModule {}
