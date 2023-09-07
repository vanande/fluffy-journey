import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from "@angular/router";
import {ThemeService} from "../theme.service";
import {TranslateService} from "../translate.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public router: Router, private themeService : ThemeService, private translateService: TranslateService) {}
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }
  setLang(lang: string){
    this.translateService.use(lang)
  }
}
