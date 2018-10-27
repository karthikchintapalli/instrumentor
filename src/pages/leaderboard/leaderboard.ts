import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'leaderboard.html'
})
export class LeaderBoard {
  // icons: string[];
  instruments: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.instruments = ['Overall', 'Keyboard', 'Guitar', 'Ukulele', 'Flute'];
    for(let i = 0; i < this.instruments.length; i++) {
      this.items.push({
        title: this.instruments[i],
        note: '',
        // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        icon: 'analytics'
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
