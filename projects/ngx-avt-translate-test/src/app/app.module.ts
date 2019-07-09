import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxAvtTranslateModule, NgxAvtTranslateService } from 'projects/ngx-avt-translate/src/public-api';
import { lang } from './i18n';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: ':lang',
        component: LayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
          },
          {
            path: 'about-us',
            loadChildren: () => import('./pages/about-us-page/about-us-page.module').then(m => m.AboutUsPageModule)
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
      },
      {
        path: '**',
        redirectTo: navigator.language.split('-')[0]
      }
    ]),
    NgxAvtTranslateModule.forRoot({ jsonOject: lang }),
  ],
  providers: [NgxAvtTranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
