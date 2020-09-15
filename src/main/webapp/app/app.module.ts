import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CvWebHenrySharedModule } from 'app/shared/shared.module';
import { CvWebHenryCoreModule } from 'app/core/core.module';
import { CvWebHenryAppRoutingModule } from './app-routing.module';
import { CvWebHenryHomeModule } from './home/home.module';
import { CvWebHenryEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { MentionLegalesComponent } from './mention-legales/mention-legales.component';
import { CompetencesComponent } from './competences/competences.component';

@NgModule({
  imports: [
    BrowserModule,
    CvWebHenrySharedModule,
    CvWebHenryCoreModule,
    CvWebHenryHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CvWebHenryEntityModule,
    CvWebHenryAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent, CvComponent, ContactComponent, MentionLegalesComponent, CompetencesComponent],
  bootstrap: [JhiMainComponent]
})
export class CvWebHenryAppModule {}
