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

* AD	Andorra
* AE	United Arab Emirates
* AF	Afghanistan
* AG	Antigua and Barbuda
* AI	Anguilla
* AL	Albania
* AM	Armenia
* AN	Netherlands Antilles
* AO	Angola
* AQ	Antarctica
* AR	Argentina
* AS	American Samoa
* AT	Austria
* AU	Australia
* AW	Aruba
* AZ	Azerbaijan
* BA	Bosnia and Herzegovina
* BB	Barbados
* BD	Bangladesh
* BE	Belgium
* BF	Burkina Faso
* BG	Bulgaria
* BH	Bahrain
* BI	Burundi
* BJ	Benin
* BM	Bermuda
* BN	Brunei Darussalam
* BO	Bolivia
* BR	Brazil
* BS	Bahamas
* BT	Bhutan
* BV	Bouvet Island
* BW	Botswana
* BY	Belarus
* BZ	Belize
* CA	Canada
* CC	Cocos (Keeling Islands)
* CF	Central African Republic
* CG	Congo
* CH	Switzerland
* CI	Cote D’Ivoire (Ivory Coast)
* CK	Cook Islands
* CL	Chile
* CM	Cameroon
* CN	China
* CO	Colombia
* CR	Costa Rica
* CU	Cuba
* CV	Cape Verde
* CX	Christmas Island
* CY	Cyprus
* CZ	Czech Republic
* DE	Germany
* DJ	Djibouti
* DK	Denmark
* DM	Dominica
* DO	Dominican Republic
* DZ	Algeria
* EC	Ecuador
* EE	Estonia
* EG	Egypt
* EH	Western Sahara
* ER	Eritrea
* ES	Spain
* ET	Ethiopia
* FI	Finland
* FJ	Fiji
* FK	Falkland Islands (Malvinas)
* FM	Micronesia
* FO	Faroe Islands
* FR	France
* FX	France, Metropolitan
* GA	Gabon
* GD	Grenada
* GE	Georgia
* GF	French Guiana
* GH	Ghana
* GI	Gibraltar
* GL	Greenland
* GM	Gambia
* GN	Guinea
* GP	Guadeloupe
* GQ	Equatorial Guinea
* GR	Greece
* GS	S. Georgia and S. Sandwich Isls.
* GT	Guatemala
* GU	Guam
* GW	Guinea-Bissau
* GY	Guyana
* HK	Hong Kong
* HM	Heard and McDonald Islands
* HN	Honduras
* HR	Croatia (Hrvatska)
* HT	Haiti
* HU	Hungary
* ID	Indonesia
* IE	Ireland
* IL	Israel
* IN	India
* IO	British Indian Ocean Territory
* IQ	Iraq
* IR	Iran
* IS	Iceland
* IT	Italy
* JM	Jamaica
* JO	Jordan
* JP	Japan
* KE	Kenya
* KG	Kyrgyzstan (Kyrgyz Republic)
* KH	Cambodia
* KI	Kiribati
* KM	Comoros
* KN	Saint Kitts and Nevis
* KP	Korea (North) (People’s Republic)
* KR	Korea (South) (Republic)
* KW	Kuwait
* KY	Cayman Islands
* KZ	Kazakhstan
* LA	Laos
* LB	Lebanon
* LC	Saint Lucia
* LI	Liechtenstein
* LK	Sri Lanka
* LR	Liberia
* LS	Lesotho
* LT	Lithuania
* LU	Luxembourg
* LV	Latvia
* LY	Libya
* MA	Morocco
* MC	Monaco
* MD	Moldova
* ME	Montenegro
* MG	Madagascar
* MH	Marshall Islands
* MK	Macedonia
* ML	Mali
* MM	Myanmar
* MN	Mongolia
* MO	Macau
* MP	Northern Mariana Islands
* MQ	Martinique
* MR	Mauritania
* MS	Montserrat
* MT	Malta
* MU	Mauritius
* MV	Maldives
* MW	Malawi
* MX	Mexico
* MY	Malaysia
* MZ	Mozambique
* NA	Namibia
* NC	New Caledonia
* NE	Niger
* NF	Norfolk Island
* NG	Nigeria
* NI	Nicaragua
* NL	Netherlands
* NO	Norway
* NP	Nepal
* NR	Nauru
* NT	Neutral Zone (Saudia Arabia/Iraq)
* NU	Niue
* NZ	New Zealand
* OM	Oman
* PA	Panama
* PE	Peru
* PF	French Polynesia
* PG	Papua New Guinea
* PH	Philippines
* PK	Pakistan
* PL	Poland
* PM	St. Pierre and Miquelon
* PN	Pitcairn
* PR	Puerto Rico
* PT	Portugal
* PW	Palau
* PY	Paraguay
* QA	Qatar
* RE	Reunion
* RO	Romania
* RS	Serbia
* RU	Russian Federation
* RW	Rwanda
* SA	Saudi Arabia
* SB	Solomon Islands
* SC	Seychelles
* SD	Sudan
* SE	Sweden
* SG	Singapore
* SH	St. Helena
* SI	Slovenia
* SJ	Svalbard and Jan Mayen Islands
* SK	Slovakia (Slovak Republic)
* SL	Sierra Leone
* SM	San Marino
* SN	Senegal
* SO	Somalia
* SR	Suriname
* ST	Sao Tome and Principe
* SU	Soviet Union (former)
* SV	El Salvador
* SY	Syria
* SZ	Swaziland
* TC	Turks and Caicos Islands
* TD	Chad
* TF	French Southern Territories
* TG	Togo
* TH	Thailand
* TJ	Tajikistan
* TK	Tokelau
* TM	Turkmenistan
* TN	Tunisia
* TO	Tonga
* TP	East Timor
* TR	Turkey
* TT	Trinidad and Tobago
* TV	Tuvalu
* TW	Taiwan
* TZ	Tanzania
* UA	Ukraine
* UG	Uganda
* UK	United Kingdom (Great Britain)
* UM	US Minor Outlying Islands
* US	United States
* UY	Uruguay
* UZ	Uzbekistan
* VA	Vatican City State (Holy See)
* VC	Saint Vincent and The Grenadines
* VE	Venezuela
* VG	Virgin Islands (British)
* VI	Virgin Islands (US)
* VN	Viet Nam
* VU	Vanuatu
* WS	Samoa
* WF	Wallis and Futuna Islands
* YE	Yemen
* YT	Mayotte
* YU	Yugoslavia
* ZA	South Africa
* ZM	Zambia
* ZR	Zaire
* ZW	Zimbabwe

`Defualt Language English (en) `