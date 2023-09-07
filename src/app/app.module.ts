import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule, RouterOutlet} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import { TranslatePipe } from './translate.pipe';
import {TranslateService} from "./translate.service";
import { HttpClientModule} from "@angular/common/http";

export function setupTranslateServiceFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LandingComponent,
    TranslatePipe
  ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      RouterOutlet,
      RouterModule.forRoot([
          {path: 'home', component: LandingComponent},
          {path: '', redirectTo: '/home', pathMatch: 'full'},
      ]),
      CarouselModule,
      AccordionModule,
      MatExpansionModule,
      NgOptimizedImage,
      FormsModule,
      MatMenuModule,
      HttpClientModule
    ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
