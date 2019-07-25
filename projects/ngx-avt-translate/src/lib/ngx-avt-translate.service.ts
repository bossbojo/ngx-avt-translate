import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class JsonLang {
  jsonOject: any = {};
}

@Injectable({
  providedIn: 'root'
})
export class NgxAvtTranslateService {
  defualtLang = 'en';
  onChangeLang = new Subject();
  constructor() { }
  setDefualtLang(key: string) {
    this.defualtLang = key;
    this.onChangeLang.next(key);
  }
  getDefualtLang(): string {
    return this.defualtLang;
  }
  onTranslate(value, json) {
    const key = value.split('.');
    if (key.length === 0) {
      return value;
    }
    let buff = json.jsonOject[this.getDefualtLang()];
    if (!buff) {
      return value;
    }
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
