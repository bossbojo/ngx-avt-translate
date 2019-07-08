import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAvtTranslateModule, NgxAvtTranslateService } from 'projects/ngx-avt-translate/src/public-api';
import { lang } from './i18n';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAvtTranslateModule.forRoot({ jsonOject: lang })
  ],
  providers: [NgxAvtTranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
