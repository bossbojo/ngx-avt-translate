import { NgModule, ModuleWithProviders } from '@angular/core';
import { JsonLang } from './ngx-avt-translate.service';
import { NgxAvtTranslatePipe } from './ngx-avt-translate.pipe';

@NgModule({
  declarations: [
    NgxAvtTranslatePipe
  ],
  imports: [],
  exports: [
    NgxAvtTranslatePipe
  ]
})
export class NgxAvtTranslateModule {
  static forRoot(config: JsonLang): ModuleWithProviders {
    return {
      ngModule: NgxAvtTranslateModule,
      providers: [{
        provide: JsonLang,
        useValue: config
      }]
    };
  }
  static forChild(config: JsonLang): ModuleWithProviders {
    return {
      ngModule: NgxAvtTranslateModule,
      providers: [{
        provide: JsonLang,
        useValue: config
      }]
    };
  }
}
