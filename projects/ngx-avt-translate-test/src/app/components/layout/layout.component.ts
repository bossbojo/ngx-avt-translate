import { Component, OnInit } from '@angular/core';
import { NgxAvtTranslateService } from 'projects/ngx-avt-translate/src/public-api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'avt-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private serviceLang: NgxAvtTranslateService) { }

  ngOnInit() {
  }

  switchLanguage(lang: string) {
    this.serviceLang.setDefualtLang(lang);
  }
  getLanguage() {
    this.serviceLang.getDefualtLang();
  }
}
