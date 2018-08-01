import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddABookPage } from './add-a-book';

@NgModule({
  declarations: [
    AddABookPage,
  ],
  imports: [
    IonicPageModule.forChild(AddABookPage),
  ],
})
export class AddABookPageModule {}
