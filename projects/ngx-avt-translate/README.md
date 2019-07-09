# NgxAvtTranslate

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Installation

```
npm i ngx-avt-translate --save
```
## Usage

### 1. Import the NgxAvtTranslateModule:
Finally, you can use ngx-translate in your Angular project. You have to import `NgxAvtTranslateModule.forRoot()` in the root NgModule of your application.

The forRoot static method is a convention that provides and configures services at the same time. Make sure you only call this method in the root module of your application, most of the time called AppModule. This method allows you to configure the NgxAvtTranslateModule by specifying a loader, a parser and/or a missing translations handler.
#### Create file `src/app/i18n/lang/en.ts`
```ts
export const en = {
    title: {
        home: 'home'
    }
};
```
#### Create file `src/app/i18n/lang/th.ts`
```ts
export const th = {
    title: {
        home: 'หน้าหลัก'
    }
};
```
#### Create file `src/app/i18n/lang/kh.ts`
```ts
export const kh = {
    title: {
        home: 'ទំព័រដើម'
    }
};
```
#### Create file `src/app/i18n/index.ts`
```ts
import { en } from './lang/en.lang';
import { th } from './lang/th.lang';
import { kh } from './lang/kh.lang';
export const lang = { en, th, kh };
```
#### Update file `app.module.ts`

```ts
import { NgxAvtTranslateModule, NgxAvtTranslateService } from 'ngx-avt-translate';
import { lang } from './i18n/index.ts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAvtTranslateModule.forRoot({ jsonOject: lang }) /* import this module */
  ],
  providers: [NgxAvtTranslateService], /* use NgxAvtTranslateService */
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### How to use

```html
<p>{{ 'title.home' | toTranslate }}</p>
```

## How to change lang

```ts
  constructor(private serviceLang: NgxAvtTranslateService) { }

  switchLanguage(lang: string) {
    this.serviceLang.setDefualtLang(lang);
  }

  getLanguage() {
    this.serviceLang.getDefualtLang();
  }
```
## Support Lazyload can use forChild
```ts
import { NgxAvtTranslateModule } from 'ngx-avt-translate';

@NgModule({
  imports: [
    NgxAvtTranslateModule.forChild({ jsonOject: lang }) /* import this module */
  ],
})
```

# Support Language

* en = thailand 
* th = thailand 
* kh = thailand

`Defualt Language follow by browser`