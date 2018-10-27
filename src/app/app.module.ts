import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyProfile } from '../pages/myprofile/myprofile';
import { LeaderBoard } from '../pages/leaderboard/leaderboard';
import { GenrePage } from '../pages/genre/genre';
import { CustomGenrePage } from '../pages/customgenre/customgenre';
import { SheetMusicPage } from '../pages/sheetmusic/sheetmusic';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MyProfile,
    LeaderBoard,
    GenrePage,
    CustomGenrePage,
    SheetMusicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyProfile,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LeaderBoard,
    GenrePage,
    CustomGenrePage,
    SheetMusicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
