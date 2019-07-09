import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class JsonLang {
  jsonOject: SupportLang = {};
}
export interface SupportLang {
  th?: any;
  en?: any;
  kh?: any;
}

@Injectable({
  providedIn: 'root'
})
export class NgxAvtTranslateService {
  defualtLang = 'en';
  onChangeLang = new Subject();
  setDefualtLang(key: string) {
    this.defualtLang = key;
    this.onChangeLang.next(key);
  }
  getDefualtLang(): string {
    return this.defualtLang;
  }
}
