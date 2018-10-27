import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {SheetMusicPage} from '../sheetmusic/sheetmusic';

@Component({
  selector: 'page-item-details',
  templateUrl: 'customgenre.html'
})
export class CustomGenrePage {
  selectedItem: any;
  genres: string[];
  items: Array<{title: string, note: string, icon: string}>;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.genres = ["Custom Song", "Classical", "Jazz", "Contemporary", "Christian"];
    this.items = [];

    for(let i = 0; i < this.genres.length; i++) {
      this.items.push({
        title: this.genres[i],
        note: '',
        // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        icon: 'musical-notes'
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(SheetMusicPage, {
      item: item
    });
  }
}