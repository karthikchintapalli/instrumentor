import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // icons: string[];
  instruments: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    this.instruments = ['Keyboard', 'Guitar', 'Ukulele', 'Flute'];
    for(let i = 0; i < 4; i++) {
      this.items.push({
        title: this.instruments[i],
        note: '',
        // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        icon: 'musical-notes'
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
