import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'myprofile.html'
})
export class MyProfile {
  items: Array<{title: string, note: string, icon: string}>;
  fields: string[];
  icons: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.icons = ["person", "arrow-round-up", "cube", "cube", "settings", "exit"];
    this.fields = ["Personal Details", "My Uploads", "Score", "Rank", "Settings", "Log Out"];
    for(let i = 0; i < this.fields.length; i++) {
      this.items.push({
        title: this.fields[i],
        note: '',
        icon: this.icons[i]
      });
    }
  }

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
