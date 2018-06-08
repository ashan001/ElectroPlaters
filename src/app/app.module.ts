import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { MarketinComponent } from './marketing-section/marketing-sec.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './service/project-service/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from '@angular/common/http';
import { LocalSettingsService } from './service/languageFile/app-translation.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FeatureComponent } from './feature/feature.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryService } from './service/gallery-service/gallery.service';


export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, '/assets/local/', '.json');
};


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    MarketinComponent,
    ProjectComponent,
    ContactComponent,
    FeatureComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [
    ProjectService,
    LocalSettingsService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
