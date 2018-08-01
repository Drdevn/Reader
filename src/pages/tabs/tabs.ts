import { Component } from '@angular/core';

import { AddABookPage } from '../add-a-book/add-a-book';
import { ChooseABookPage } from '../choose-a-book/choose-a-book';
import { HomePage } from '../home/home';
import { ReaderPage } from '../reader/reader';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddABookPage;
  tab2Root = ChooseABookPage;
  tab3Root = ReaderPage;

  constructor(){

  }
}
