import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './images/images.component';
import { MenuComponent } from './menu/menu.component';

import { ImagesService } from './images/services/images.services';
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagesComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [ImagesService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
