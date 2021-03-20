import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeleversementComponent } from './televersement/televersement.component';
import { LivresComponent } from './livres/livres.component';
import { ListelivresComponent } from './connection/listelivres.component';
import { AutreComponent } from './autre/autre.component';
import { AgentComponent } from './agent/agent.component';
import{ HomeComponent}  from './home/home.component';
import { ImageComponent } from './image/image.component';




const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"livres", component: LivresComponent},
  {path:"televersement", component: TeleversementComponent},
  {path:"autre", component: AutreComponent},
  {path:"agent", component: AgentComponent},
  {path:"connection", component: ListelivresComponent},
  {path: "image", component: ImageComponent},
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
