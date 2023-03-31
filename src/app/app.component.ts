import {getLocaleCurrencySymbol} from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'angular-internationalization-example';
  public pictitle = $localize `:@@pictitle:picture title`;
  public money = Math.random() * 100000;
  public symbol: string | null;
  public mydate = new Date();

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.symbol = getLocaleCurrencySymbol(localeId);
  }

}
