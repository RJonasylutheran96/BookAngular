import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { TeleversementComponent } from './televersement/televersement.component';
import { ListelivresComponent } from './connection/listelivres.component';
import { AutreComponent } from './autre/autre.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgentComponent } from './agent/agent.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    TeleversementComponent,
    ListelivresComponent,
    AutreComponent,
    AgentComponent,
    FooterComponent,
    HomeComponent,
    ImageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
