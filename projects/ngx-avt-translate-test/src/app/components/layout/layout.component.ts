import { Component, OnInit } from '@angular/core';
import { NgxAvtTranslateService } from 'projects/ngx-avt-translate/src/public-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'avt-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private ActRoute: ActivatedRoute, private route: Router, private serviceLang: NgxAvtTranslateService) {
    this.ActRoute.params.subscribe(p => {
      this.serviceLang.setDefualtLang(p.lang);
    });
    // this.serviceLang.setDefualtLang(this.ActRoute.snapshot.params.lang);
  }
  ngOnInit() {
  }

  switchLanguage(lang: string) {
    this.serviceLang.setDefualtLang(lang);
  }
  switchLanguageFormRoute(lang: string) {
    const oldLang = this.getLanguage;
    if (this.route.url.toString().match(oldLang)) {
      this.route.navigate([this.route.url.replace(oldLang, lang)]);
    } else {
      this.route.navigate([`/${lang}`]);
    }
  }
  get getLanguage(): string {
    return this.serviceLang.getDefualtLang();
  }
}
