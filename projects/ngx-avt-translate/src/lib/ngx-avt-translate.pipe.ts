import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { JsonLang, NgxAvtTranslateService } from './ngx-avt-translate.service';

@Pipe({
  name: 'toTranslate',
  pure: false
})
export class NgxAvtTranslatePipe implements PipeTransform, OnDestroy {

  constructor(private json: JsonLang, private getLang: NgxAvtTranslateService, private pipeRef: ChangeDetectorRef) {
    this.getLang.onChangeLang.subscribe(() => {
      // this.pipeRef.detectChanges();
      this.pipeRef.markForCheck();
    });
  }
  ngOnDestroy(): void {
    this.pipeRef.detach();
  }
  transform(value: string, args?: any) {
    const key = value.split('.');
    let buff = this.json.jsonOject[this.getLang.getDefualtLang()];
    key.forEach(k => {
      if (buff[k]) {
        buff = buff[k];
      } else {
        return value;
      }
    });
    if ((typeof buff === 'object' || typeof buff === 'function') && (buff !== null)) {
      return value;
    }
    return buff;
  }

}
