import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { JsonLang, NgxAvtTranslateService } from './ngx-avt-translate.service';

@Pipe({
  name: 'toTranslate',
  pure: false
})
export class NgxAvtTranslatePipe implements PipeTransform {

  constructor(private json: JsonLang, private ser: NgxAvtTranslateService, private pipeRef: ChangeDetectorRef) {
    this.ser.onChangeLang.subscribe(() => {
      this.pipeRef.markForCheck();
    });
  }
  transform(value: string, args?: any) {
    return this.ser.onTranslate(value, this.json);
  }

}
