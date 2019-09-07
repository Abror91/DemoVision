import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Helpers } from '../helpers/helpers';
import { startWith, delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  subscription: Subscription;
  authenticated: boolean = false;
  title = 'vision-front';
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private _helper: Helpers) {
  }

  ngAfterViewInit() {
    this.subscription = this._helper.isAuthenticationChanged().pipe(
      startWith(this._helper.isAuthenticated()),
      delay(0)).subscribe((value) =>
        this.authenticated = value
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
