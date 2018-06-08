import { Component } from '@angular/core';
import { LocalSettingsService } from '../service/languageFile/app-translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({   
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.css"]
})

export class LandingComponent {

    
    constructor(private translate: TranslateService, public localSettings: LocalSettingsService) {

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // try to get saved language
        var storedLang: string = localSettings.getLanguage();

        if (storedLang !== "") {
            translate.use(storedLang);
        }
    }

  
}

