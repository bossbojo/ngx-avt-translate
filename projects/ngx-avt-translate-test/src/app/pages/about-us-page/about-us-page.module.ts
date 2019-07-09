import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './about-us-page.component';
import { RouterModule } from '@angular/router';
import { NgxAvtTranslateModule } from 'projects/ngx-avt-translate/src/public-api';
import { lang } from './i18n';

@NgModule({
  imports: [
    CommonModule,
    NgxAvtTranslateModule.forChild({ jsonOject: lang }),
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPageComponent
      }
    ])
  ],
  declarations: [AboutUsPageComponent]
})
export class AboutUsPageModule { }
